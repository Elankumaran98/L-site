import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CRUD from "./components/CRUD";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crud" element={<CRUD/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
