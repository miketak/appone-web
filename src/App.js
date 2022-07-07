import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import ForgotPassword from "./components/forgot.password";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <main className="container" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/*<Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quotation" element={<Quotation />} /> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
