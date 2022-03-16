import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
import { FavoriteListStore, Favorites } from "./components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoriteListStore />} />
            <Route path="/pokemons/:id" element={<PokemonDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
