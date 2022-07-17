import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {user && 
        (<React.Fragment>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
          </button>
        </React.Fragment>)}
        <a
          className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
          href="#"
        >
          CNAYA'S Travel Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="topNavBar">
          <NavLink
            className="nav-item nav-link"
            style={{ color: "white" }}
            to="/home"
          >
            Home
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink
                className="nav-item"
                style={{ color: "white" }}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                style={{ color: "white" }}
                to="/signup"
              >
                Sign Up
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              {/* <NavLink
                className="nav-item nav-link"
                style={{ color: "white" }}
                to="/"
              >
                TODO: Fix this monstrosity future Michael :) 
                {user.user.name}
              </NavLink> */}
              <NavLink
                className="nav-item nav-link"
                style={{ color: "white" }}
                to="/logout"
              >
                Log Out
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    //   <Link className="navbar-brand" to="/">
    //     CNAYA'S TRAVEL PORTAL
    //   </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-bs-toggle="collapse"
    //     data-bs-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navBarAltMarkup">
    //     <div className="navbar-nav">
    //       <NavLink className="nav-item nav-link" to="/home">
    //         Home
    //       </NavLink>
    //       {!user && (
    //         <React.Fragment>
    //           <NavLink className="nav-item nav-link" to="/login">
    //             Login
    //           </NavLink>
    //           <NavLink className="nav-item nav-link" to="/signup">
    //             Sign Up
    //           </NavLink>
    //         </React.Fragment>
    //       )}
    //       {user && (
    //         <React.Fragment>
    //           <NavLink className="nav-item nav-link" to="">
    //             {user.name}
    //           </NavLink>
    //           <NavLink className="nav-item nav-link" to="/logout">
    //             Log Out
    //           </NavLink>
    //         </React.Fragment>
    //       )}
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
