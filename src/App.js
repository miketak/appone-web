import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { Component } from "react";
import jwtDecode from "jwt-decode";
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
import logger from "./services/logService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      // const user = jwtDecode(jwt);
      // console.log(user);
      // this.setState({ user });
      // TODO: Change this when jwt is implemented
      //       on backend
      if (jwt && jwt !== -1) {
        logger.log(jwt);
        // logger.log("jwt is not -1");
        const user = { user: { name: "Fake Name" } };
        // logger.log(user.name);
        this.setState(user);
      }
    } catch (error) {}
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar user={this.state.user} />
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
}

export default App;
