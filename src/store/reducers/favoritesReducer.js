export const ADD_FAVORITE_ACTION = 'ADD_FAVORITE_ACTION'
export const ADD_COUNT_ACTION = 'ADD_COUNT_ACTION'
export const ADD_POKEMON_ACTION = 'ADD_POKEMON_ACTION'
export const GET_FAVORITE_ACTION = 'GET_FAVORITE_ACTION'
export const DELETE_POKEMON_ACTION = 'DELETE_POKEMON_ACTION'

function favoritesReducer (state = [], action) {
    state = state === undefined || state === null ? [] : state
    switch (action.type) {
        case GET_FAVORITE_ACTION:
            return state

        case ADD_FAVORITE_ACTION:
            return [...state, {id: action.payload.id, name: action.payload.name}]

        case ADD_COUNT_ACTION:
            return state.map( fav => {
                if (fav.id === action.payload.id) {
                    const min = 1;
                    const max = 100;
                    const rand = min + Math.random() * (max - min);
                    return {...fav, counter:  !fav.counter ? 1 : ++fav.counter, isSheiny: rand >10 ? false : true}
                } else {
                    return fav
                }
            })

        case ADD_POKEMON_ACTION:
            return [...state, {...action.payload}]

        case DELETE_POKEMON_ACTION:
            return state.filter(fav => fav.id !== action.payload.id )

        default:
            return state;
    }
}

export default favoritesReducer