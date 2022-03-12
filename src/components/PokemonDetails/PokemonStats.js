import { Grid } from "@mui/material";
import PokemonStatBar from "./PokemonStatBar";

const PokemonStats = (props) => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={6}>
        {props.stats.map((stat, key) => {
          return (
            <PokemonStatBar
              key={key}
              statName={stat.stat.name}
              value={stat.base_stat}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

PokemonStats.defaultProps = {
  stats: [{ stats: { name: "" } }],
};

export default PokemonStats;
