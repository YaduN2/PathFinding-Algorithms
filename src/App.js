import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DijkstraHome from "./Pages/DijkstraHomePage";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<DijkstraHome />}></Route>
        <Route path="/dijkstra" element={<DijkstraHome />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
