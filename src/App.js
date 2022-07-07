import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";

import "./App.css";
import Quotation from "./components/quotation";
import ForgotPassword from "./components/forgot.password";
import ChangePassword from "./components/change.password";

function App() {
  return (
    <main className="container">
      <h1>CNAYA'S Travel Portal</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/forgotpassword">Forgot Password</Link>
            </li>
            <li>
              <Link to="/changepassword">Change Password</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/quotation">Quotation</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quotation" element={<Quotation />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
