import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import auth from "../services/authService";

class Dashboard extends Component {
  state = {};
  render() {
    const { user } = auth.getCurrentUser();
    return (
      <div>
        <h1>My Dashboard</h1>
        <p>Welcome {user.name}!</p>
        <SideBar />
        <Outlet />
      </div>
    );
  }
}

export default Dashboard;
