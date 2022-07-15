import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignupForm from "./components/signupForm";
import ForgotPassword from "./components/forgotPassword";
import NotFound from "./components/notfound";
import Dashboard from "./components/dashboard";
import ChangePassword from "./components/changePasswordForm";
import Quotations from "./components/quotations";
import QuotationForm from "./components/quotationForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import logger from "./services/logService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar user={user} />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="logout" element={<Logout />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route exact path="not-found" element={<NotFound />} />
            <Route
              path="dashboard"
              element={
                user !== null ? <Dashboard /> : <Navigate to="/login" replace />
              }
            >
              <Route index element={<Quotations />} />
              <Route path="quotations" element={<Quotations />} />
              <Route path="quotations/:id" element={<QuotationForm />} />
              <Route path="changepassword" element={<ChangePassword />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Route>
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
