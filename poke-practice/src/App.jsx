import { Route, Routes } from "react-router";
import PokeList from "./pages/PokeList";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import PokeShow from "./pages/PokeShow";
import "./App.css";

//You need to have <Routes></Routes> (This is plural and has an opening and closing)
//and closing tag because it wraps all the routes

//>Route /> is singular (no s) and it is self closing
// this is what wull link what the user sees in the url bar
//with what we are showing in the broswer
// it requires both the path, which is what tells us what is in the url bar
// and the element which tells us what we are rendering.

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/*http://localhost:5173 */}
        <Route path="/" element={<Welcome />} />
        {/* http://localhost:5173/pokelist */}
        <Route path="/pokelist" element={<PokeList />} />
        {/*  http://localhost:5173/pokemon:/:name  */}
        <Route path="/pokemon/:name" element={<PokeShow />} />
      </Routes>
    </>
  );
}

export default App;
