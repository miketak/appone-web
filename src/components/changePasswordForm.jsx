import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class ChangePasswordForm extends Form {
  state = {
    data: { currentPassword: "", newPassword: "", newPassword2: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submited");
  };

  render() {
    return (
      <div>
        <h1>Change Password</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("currentPassword", "Current Password", "password")}
          {this.renderInput("newPassword", "New Password", "password")}
          {this.renderInput("newPassword2", "Confirm Password", "password")}
          {this.renderButton("Change Password")}
        </form>
      </div>
    );
  }
}

export default ChangePasswordForm;
