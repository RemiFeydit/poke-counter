import { Grid, Typography } from "@mui/material";
import PokemonAbilities from "./PokemonAbilities";
import PokemonType from "./PokemonType";
import { Capitalize } from "../../utils/utils";

const PokemonInfos = ({ pokemon }) => {
  return (
    <Grid item xs={3} margin={4}>
      <Typography variant="h5">Pokémon n°{pokemon.order}</Typography>
      <Typography variant="h5">
        Name :{` ${Capitalize(pokemon.name)}`}
      </Typography>
      <PokemonAbilities abilities={pokemon.abilities} />
      <Typography variant="h5">Height : {pokemon.height / 10} m</Typography>
      <Typography variant="h5">Weight : {pokemon.weight / 10} kg</Typography>
      <PokemonType types={pokemon.types} />
    </Grid>
  );
};

export default PokemonInfos;
