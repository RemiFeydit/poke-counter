import { CardActionArea, CardMedia, Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const PokemonCardImageDetails = (props) => {
  const [image, setImage] = useState("");
  const [isShiny, setIsShiny] = useState(false);

  const changeImage = () => {
    if (isShiny) {
      setIsShiny(false);
    } else {
      setIsShiny(true);
    }
  };

  useEffect(() => {
    setImage(isShiny ? props.image.front_shiny : props.image.front_default);
  });

  return (
    <Grid item xs={2}>
      <Card>
        <CardActionArea onClick={changeImage}>
          <CardMedia component="img" image={image} alt="pokemonImg" />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

PokemonCardImageDetails.defaultProps = {
  image: null,
};

export default PokemonCardImageDetails;
