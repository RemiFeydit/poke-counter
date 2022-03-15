import { Typography } from "@mui/material";
import { Capitalize } from "../../utils/utils";

const PokemonType = ({ types }) => {
  const typesEmoji = {
    normal: "⚪",
    fighting: "🥊",
    flying: "🌪️",
    poison: "☠️",
    ground: "🌍",
    rock: "⛏️",
    bug: "🐛",
    ghost: "👻",
    steel: "🔩",
    fire: "🔥",
    water: "💧",
    grass: "🍃",
    electric: "⚡",
    psychic: "🔮",
    ice: "❄️",
    dragon: "🐉",
    dark: "🖤",
    fairy: "🧚",
  };
  return (
    <Typography variant="h5">
      Types :
      {types.map((type, key) => {
        return (
          <Typography component="legend" variant="h6" key={key}>
            {`• ${Capitalize(type.type.name)} ${typesEmoji[type.type.name]}`}
          </Typography>
        );
      })}
    </Typography>
  );
};

PokemonType.defaultProps = {
  types: [],
};
export default PokemonType;
