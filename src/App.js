import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons/:id" element={<PokemonDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
