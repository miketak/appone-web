import React, { Component } from "react";

class Signup extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Sign Up</h2>
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Firs Name"
              id="firstName"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              id="lastName"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              id="email"
              aria-describedby="emailHelp"
            />
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
            Sign Up
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Signup;
