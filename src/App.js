import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import Updates from "./Pages/Updates";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
