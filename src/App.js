import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;