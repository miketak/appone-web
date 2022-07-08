import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import ForgotPassword from "./components/forgot.password";
import NotFound from "./components/notfound";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      <Navbar />
      <main className="container" />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/not-found" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        {/*<Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/quotation" element={<Quotation />} /> */}
      </Routes>
      {/* </BrowserRouter> */}
    </React.Fragment>
  );
}

export default App;
