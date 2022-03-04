import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  return (
    <Grid item xs={props.size}>
      <Link style={{ textDecoration: "none" }} to={`/pokemon/${props.id}`}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" image={props.image} alt="film image" />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default PokemonCard;
