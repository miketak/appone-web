import React, { Component } from "react";

class ForgotPassword extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Forgot Password</h2>
        <form>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-dark">
            Reset Password
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
