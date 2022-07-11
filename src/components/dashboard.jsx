import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="offcanvas offcanvas-start sidebar-nav bg-dark"
          tabindex="-1"
          id="sidebar"
        >
          <div className="offcanvas-body p-0">
            <nav className="navbar-dark">
              <SideBar />
            </nav>
          </div>
        </div>
        {/* <!-- offcanvas --> */}
        <main className="mt-5 pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h4>Dashboard</h4>
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Dashboard;
