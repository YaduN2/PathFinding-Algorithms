import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DijkstraHome from "./Pages/DijkstraHomePage";
import AStar from "./Pages/AStarHomePage";
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";

function App() {
  const content = {
    PathFindingVisualizer: {
      heading: "Path Findr",
      description:
        "This project aims to create a web based e-Learning tool, which can be used to visualize shortest path algorithms.",
    },
    PathFindingAlgorithms: {
      heading: "Path Finding Algorithms",
      description:
        "Pathfinding or pathing is the plotting, by a computer application, of the shortest route between two points. It is a more practical variant on solving mazes. We will be looking two different algorithms namely; Dijkstra and A*",
    },
    Dijkstra: {
      heading: "Dijkstra's algorithm",
      description:
        "Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later",
      explanation:
        'Dijkstra\'s original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.',
    },
    AStar: {
      heading: "A* algorithm",
      description:
        "It is a searching algorithm that is used to find the shortest path between an initial and a final point. It is a handy algorithm that is often used for map traversal to find the shortest path to be taken. A* was initially designed as a graph traversal problem, to help build a robot that can find its own course. It still remains a widely popular algorithm for graph traversal.",
      explanation:
        "What A* Search Algorithm does is that at each step it picks the node according to a value-'f' which is a parameter equal to the sum of two other parameters - 'g' and 'h'. At each step it picks the node/cell having the lowest 'f', and process that node/cell.We define 'g' and 'h' as simply as possible below  g = the movement cost to move from the starting point to a given square on the grid, following the path generated to get there.h = the estimated movement cost to move from that given square on the grid to the final",
    },
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home content={content} />}></Route>
        <Route path="/dijkstra" element={<DijkstraHome />}></Route>
        <Route path="/AStar" element={<AStar />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
