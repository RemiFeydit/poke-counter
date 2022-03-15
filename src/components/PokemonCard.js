import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  return (
    <Grid item xs={props.size} md={props.size / 2}>
      <Link style={{ textDecoration: "none" }} to={`/pokemons/${props.id}`}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              {props.name}
            </Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia component="img" image={props.image} alt="film image" />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default PokemonCard;
