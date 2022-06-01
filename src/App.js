import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DijkstraHome from "./Pages/DijkstraHomePage";
import AStar from "./Pages/AStarHomePage";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/dijkstra" element={<DijkstraHome />}></Route>
        <Route path="/AStar" element={<AStar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
