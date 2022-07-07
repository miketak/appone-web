import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Login extends Component {
  render() {
    return (
      <form>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-dark">
          Log In
        </button>
      </form>
    );
  }
}

export default Login;
