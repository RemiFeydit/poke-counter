import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonCardImageDetails from "./PokemonDetails/PokemonCardImageDetails";
import PokemonInfos from "./PokemonDetails/PokemonInfos";
import Header from "./Header";
import PokemonStats from "./PokemonDetails/PokemonStats";
import BackButton from "./BackButton";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({
    sprites: {
      front_default: "",
      front_shiny: "",
    },
    name: "",
    abilities: [],
    stats: [],
  });
  const { id } = useParams();

  async function fetchPokemon(id) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/pokemon/${id}`
      );
      const dataPokemon = await response.json();
      setPokemon(dataPokemon);
    } catch {
      console.log("Fetching pokemons failed");
    }
  }
  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  return (
    <div>
      <Header />
      <Grid container justifyContent="center">
        <BackButton />
        <PokemonCardImageDetails image={pokemon.sprites} />
        <PokemonInfos pokemon={pokemon} />
        <Grid item xs={7}></Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item xs={6}>
          <Typography component="legend" variant="h5">
            Statistiques :
          </Typography>
        </Grid>
      </Grid>
      <PokemonStats stats={pokemon.stats} />
    </div>
  );
};
export default PokemonDetails;
