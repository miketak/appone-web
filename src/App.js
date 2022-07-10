import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignupForm from "./components/signupForm";
import ForgotPassword from "./components/forgotPassword";
import NotFound from "./components/notfound";
import Dashboard from "./components/dashboard";
import ChangePassword from "./components/changePassword";
import Quotations from "./components/quotations";
import QuotationForm from "./components/quotationForm";
import LoginForm from "./components/loginForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Quotations />} />
            <Route path="/dashboard/quotations" element={<Quotations />} />
            <Route
              path="/dashboard/quotations/:id"
              element={<QuotationForm />}
            />
            <Route
              path="/dashboard/changepassword"
              element={<ChangePassword />}
            />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
