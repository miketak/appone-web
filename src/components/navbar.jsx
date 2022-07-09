import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/">
          CNAYA'S TRAVEL PORTAL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navBarAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
