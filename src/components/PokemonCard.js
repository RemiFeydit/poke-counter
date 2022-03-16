import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardContent, Grid, Typography, Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch } from 'react-icons/ai'
import { FaFlagCheckered } from 'react-icons/fa'
import { ADD_COUNT_ACTION, ADD_POKEMON_ACTION, DELETE_POKEMON_ACTION } from "../store/reducers/favoritesReducer";

const isFavorite = (all, id) => {
 return all.some( fav => fav.id === id )
}

const getCount = (all, id) => {
  return all.filter(fav => fav.id === id)[0]
}

const PokemonCard = ({favorites, props, addCount, addPoke, delPoke, count = false}) => {
  const theme = createTheme({
    palette: {
      gold: {
        main: "#ffd700",
        contrastText: '#fff'
      }
    }
  })
  
  let poke = getCount(favorites, props.id)  ? getCount(favorites, props.id) : undefined
  // console.log(favorites, props.id, poke.isSheiny);
  return (
    <Grid item xs={props.size} md={props.size / 2}>
        <Card>
          <CardContent style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography style={{textAlign: 'left'}} variant="h6" component="div">
              {props.name} 
            </Typography>
            <Typography onClick={() => isFavorite(favorites, props.id) ? delPoke(props.id) : addPoke(props.id, props.name) } style={{textAlign: 'right'}} variant="h6" component={isFavorite(favorites, props.id) ? AiFillHeart : AiOutlineHeart }></Typography>
          </CardContent>
          <Link style={{ textDecoration: "none" }} to={`/pokemons/${props.id}`}>
            <CardActionArea>
              <CardMedia component="img" image={ count && poke.isSheiny ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.id}.png`: props.image} alt="film image" />
            </CardActionArea>
          </Link>
        </Card>
        <ThemeProvider theme={theme}>
        {!count ? '' : <Stack spacing={2} mt={2} >
          {
            poke.isSheiny ? 
            <Button color="gold" startIcon={<FaFlagCheckered />} variant="outlined">{`Find in ${getCount(favorites, props.id).counter } try !`}</Button>
            : <Button onClick={() => addCount(props.id)} startIcon={<AiOutlineSearch />} variant="outlined">{getCount(favorites, props.id).counter ? getCount(favorites, props.id).counter : 'Search'}</Button>
          
          }
        </Stack> }
        </ThemeProvider>
    </Grid>
  );
};

export const PokemonCardRedux = connect(
  (props, ownProps) => ({
    favorites: props.favorites,
    props: ownProps
  }),
  (dispatch) => ({
    addCount: id => dispatch({
      type: ADD_COUNT_ACTION,
      payload: {id: id}
    }),
    addPoke: (id, name) => dispatch({
        type: ADD_POKEMON_ACTION,
        payload: { id: id, name: name }
    }),
    delPoke: id => dispatch({
      type: DELETE_POKEMON_ACTION,
      payload: {id: id}
    })
  }),
)(PokemonCard)
