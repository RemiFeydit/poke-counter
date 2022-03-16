import favoritesReducer from "./reducers/favoritesReducer";
const { createStore, combineReducers } = require("redux");

const store =  createStore(
    combineReducers({
        favorites: favoritesReducer
    })
)
export default store