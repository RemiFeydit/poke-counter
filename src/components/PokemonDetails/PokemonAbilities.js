import { Typography } from "@mui/material";
import { Capitalize } from "../../utils/utils";

const PokemonAbilities = ({ abilities }) => {
  return (
    <Typography variant="h5">
      Abilities :{" "}
      {abilities.map((ability, key) => {
        return (
          <Typography
            key={key}
            component="legend"
            variant="h6"
            xs={{ padding: 1000 }}
          >
            {`• ${Capitalize(ability.ability.name)} ${
              ability.is_hidden ? "⭐" : ""
            }`}
          </Typography>
        );
      })}
    </Typography>
  );
};

PokemonAbilities.defaultProps = {
  ability: { name: "" },
};
export default PokemonAbilities;
