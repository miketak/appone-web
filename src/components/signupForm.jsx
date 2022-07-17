import React from "react";
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
      const response = await userService.signup(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      this.props.history("/dashboard", { replace: true });
      window.location.reload();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
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
