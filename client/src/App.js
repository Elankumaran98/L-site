import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CRUD from "./components/CRUD";
import HHome from "./page/HHome";
import AddEditUser from "./page/AddEditUser";
import NNavBar from "./components/NNavBar";
import FbLogin from "./facebook/FbLogin";
import Signin from "./google/Signin";

function App() {
  return (
    <Router>
      <div className="App">
        <NNavBar/>
        <Routes>
          <Route path="/a" element={<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crud" element={<CRUD/>}/>
          <Route path="" element={<HHome/>}/>
          <Route path="/add" element={<AddEditUser/>}/>
          <Route path="/update/:id" element={<AddEditUser/>}/>
          <Route path="2" element={<FbLogin/>} />
          <Route path="3" element={<Signin/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
