import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/dashboard/quotations">View All Quotations</Link>
      </li>
      <li>
        <Link to="/dashboard/changepassword">Change Password</Link>
      </li>
    </ul>
  );
};

export default SideBar;
