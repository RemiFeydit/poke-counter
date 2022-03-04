import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Grid, Typography } from "@mui/material";
import Header from "./Header";
import SearchInput from "./SearchInput";
import RadioButtonGen from "./RadioButtonGen";

const Home = () => {
  const [value, setValue] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [gen, setGen] = useState("");

  const onChangeGen = (event) => {
    setGen(event.target.value);
  };

  async function fetchPokemon(generation) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon${generation}`
      );
      const data = await response.json();
      setPokemons(data.results);
    } catch {
      console.log("Fetching pokemons failed");
    }
  }

  const onChange = (event) => {
    setValue(event.target.value);
    setSearchParams(event.target.value ? { search: event.target.value } : {});
  };

  useEffect(() => {
    fetchPokemon(gen);
  }, [gen]);

  return (
    <div>
      <Header />
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 5, md: 10 }}
        sx={{ p: 3 }}
      >
        <RadioButtonGen onChange={onChangeGen} />
        <SearchInput onChange={onChange} />
        {pokemons
          .filter((pokemon) => pokemon.name.match(new RegExp(value, "i")))
          .map((pokemon) => {
            let pokemonId = pokemon.url
              .replace("https://pokeapi.co/api/v2/pokemon/", "")
              .replace("/", "");
            return (
              <PokemonCard
                key={pokemonId}
                id={pokemonId}
                name={pokemon.name.replace(/\w\S*/g, (w) =>
                  w.replace(/^\w/, (c) => c.toUpperCase())
                )}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                size={2}
              />
            );
          })}
      </Grid>
    </div>
  );
};

export default Home;
