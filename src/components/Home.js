import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Grid, TextField } from "@mui/material";

const Home = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const pokemons = [
    {
      id: 25,
      name: "Pikachu",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
    },
    {
      id: 26,
      name: "Raichu",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
    },
    {
      id: 27,
      name: "Sabelette",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
    },
    {
      id: 28,
      name: "Sablaireau",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
    },
    {
      id: 29,
      name: "Nidoran Mâle",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
    },
  ];
  const onChange = (event) => {
    setValue(event.target.value);
    setSearchParams(event.target.value ? { search: event.target.value } : {});
  };

  useEffect(() => {
    setValue(searchParams.get("search") || "");
    setMovies(pokemons);
  }, [searchParams]);

  return (
    <div>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 5, md: 10 }}
        sx={{ p: 3 }}
      >
        <Grid item xs={12}>
          <h1>
            PokeCounter<span>🍿</span>
          </h1>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Recherche"
            variant="outlined"
            margin="normal"
            onChange={onChange}
            fullWidth
          />
        </Grid>
        {pokemons
          .filter((pokemon) => pokemon.name.match(new RegExp(value, "i")))
          .map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              image={pokemon.front_default}
              size={4}
            />
          ))}
      </Grid>
    </div>
  );
};

export default Home;
