import { LinearProgress, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, blue, green, orange, amber, lime } from "@mui/material/colors";
import { Capitalize } from "../../utils/utils";

const PokemonStatBar = (props) => {
  const statistiques = {
    hp: 255,
    attack: 190,
    defense: 250,
    speed: 200,
    special_attack: 194,
    special_defense: 250,
  };

  const theme = createTheme({
    palette: {
      hp: {
        main: green[500],
      },
      attack: {
        main: red[500],
      },
      defense: {
        main: lime[500],
      },
      special_attack: {
        main: amber[500],
      },
      special_defense: {
        main: orange[500],
      },
      speed: {
        main: blue[500],
      },
    },
  });

  const normalise = (value, max) => (value * 100) / max;

  return (
    <ThemeProvider theme={theme}>
      <Typography component="legend" variant="h5">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ minWidth: 120 }}>
            <Typography variant="body2" color="text.secondary">{`${Capitalize(
              props.statName
            )} : `}</Typography>
          </Box>
          <Box sx={{ width: "25%", mr: 2 }}>
            <LinearProgress
              color={props.statName.replace("-", "_")}
              variant="determinate"
              value={normalise(
                props.value,
                statistiques[props.statName.replace("-", "_")]
              )}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">
              {`${props.value} / ${
                statistiques[props.statName.replace("-", "_")]
              }`}
            </Typography>
          </Box>
        </Box>
      </Typography>
    </ThemeProvider>
  );
};

export default PokemonStatBar;
