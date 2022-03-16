import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokemonCardRedux } from "./PokemonCard";
import { Grid } from "@mui/material";
import Header from "./Header";
import SearchInput from "./SearchInput";
import RadioButtonGen from "./RadioButtonGen";
import { Capitalize } from "../utils/utils";

const Home = () => {
  const [value, setValue] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [, setSearchParams] = useSearchParams();
  const [gen, setGen] = useState("");

  const onChangeGen = (event) => {
    setGen(event.target.value);
  };

  async function fetchPokemons(generation) {
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
    fetchPokemons(gen);
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
              <PokemonCardRedux
                key={pokemonId}
                id={pokemonId}
                name={Capitalize(pokemon.name)}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                size={4}
              />
            );
          })}
      </Grid>
    </div>
  );
};

export default Home;
