import React, { Component } from "react";
import Joi from "joi-browser";
import { useNavigate } from "react-router-dom";
import Form from "./common/form";
import userService from "../services/userService";
import auth from "../services/authService";

class SignupForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const response = userService.signup(this.state.data);

      // TODO: extract access token from body before passing.
      // Server on sign up should return just the access token.
      // When jwt is implemented, respone shall be extracted from either body or custom header
      // For now assuming response is the jwt or access token
      console.log("Response now is the jwt of: " + response);
      auth.loginWithJwt(response);

      // signup should return a jwt as well, this should be stored in local storage too.
      // redirecting for now to dashboard
      // Assumption: If we are here, everything was successful.
      this.props.history("/dashboard", { replace: true });
      window.location.reload();
    } catch (ex) {
      if (ex.response && ex.response.state === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="mt-5 pt-3">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

// TODO: Below is a hack. Fix this.
export default () => <SignupForm history={useNavigate()} />;
