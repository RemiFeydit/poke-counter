import Header from "./Header";
import { Grid, styled, Paper } from "@mui/material";
import PokemonCard, { PokemonCardRedux } from "./PokemonCard";
import { connect } from 'react-redux'
import { ADD_COUNT_ACTION } from "../store/reducers/favoritesReducer";

const FavoriteItem = ({favorite, addCount}) => {
    return <PokemonCardRedux
            count={true}
          key={favorite.id}
          id={favorite.id}
          name={favorite.name}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${favorite.id}.png`}
          size={4}
        />
} 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Favorites = ({favorites, addCount}) => {
    console.log(favorites);
    return <>
        <Header />
        <Grid  
            rowSpacing={3}
            sx={{ p: 3 }} 
            container 
            spacing={2} >
            {
                favorites.length == 0 ?
                 <Item sx={{ mx: "auto", mt: '2em' }}><p>Vous n'avez pas de pokémon en favoris</p></Item> : 
                 favorites.map((favorite, i, arr) => <FavoriteItem favorite={favorite} addCount={addCount} key={i} />)
            }
        </Grid>
    </>
}

export const FavoriteListStore = connect(
    (state) => ({
        favorites: state.favorites
    }),
    (dispatch) => ({
        addCount: favorite => dispatch({
            type: ADD_COUNT_ACTION,
            payload: {...favorite }
        })
    })
)(Favorites)
