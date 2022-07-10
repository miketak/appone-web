import React, { Component } from "react";
import Joi from "joi-browser";
import { useNavigate } from "react-router-dom";
import Form from "./common/form";
import * as authService from "../services/authService";
import { logger } from "@sentry/utils";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      logger.log(data);
      const { data: jwt } = await authService.login(data.email, data.password);

      // TODO: Backend responds with a long whatsoever, change backend to respond
      // with error 400 and status message. At this point, login will always redirect
      localStorage.setItem("token", jwt);
      this.props.history("/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.state === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

// TODO: Below is a hack. Fix this.
export default () => <LoginForm history={useNavigate()} />;
