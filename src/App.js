import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
import { FavoriteListStore, Favorites } from "./components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons/:id" element={<PokemonDetails />} />
          <Route path="/favorites" element={<FavoriteListStore />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
