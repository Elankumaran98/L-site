import React from "react";
import { NavLink } from "react-router-dom";
import L from "../assets/l.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to={"/home"}>
        <img
          src={L}
          alt="Laxi"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Bootstrap
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to={"/home"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/home"}>
              Link
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
