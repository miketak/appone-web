import React from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";

const SideBar = () => {
  const user = auth.getCurrentUser();
  console.log(user);
  return (
    <ul className="navbar-nav">
      <li>
        <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
          Welcome {user.name}
        </div>
      </li>
      <li>
        <Link to="/dashboard/quotations" className="nav-link px-3">
          View All Quotations
        </Link>
      </li>
      <li>
        <Link to="/dashboard/changepassword" className="nav-link px-3">
          Change Password
        </Link>
      </li>
      <li className="my-4">
        <hr className="dropdown-divider bg-light" />
      </li>
    </ul>
  );
};

export default SideBar;
