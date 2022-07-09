import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import ChangePassword from "./changePassword";
import Quotations from "./quotations";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>My Dashboard</h2>;
        <SideBar />
        <Outlet />
      </div>
    );
  }
}

export default Dashboard;
