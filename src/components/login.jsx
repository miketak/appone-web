import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

class Login extends Component {
  state = {
    data: { username: "", password: "" },
    adminUser: { username: "admin@yahoo.com", password: "admin" },
  };

  authenticate = () => {
    return (
      this.state.data.username === this.state.adminUser.username &&
      this.state.data.password === this.state.adminUser.password
    );
  };

  resetForm = () => {
    const data = { ...this.state.data };
    data["username"] = "";
    data["password"] = "";
    this.setState({ data });
  };

  handleLogin = (e) => {
    // Prevent page reload
    e.preventDefault();
    // TODO: Prevent user from going back
    // Navigate to dashboard on success
    // Do nothing if wrong

    if (this.authenticate()) {
      console.log("Login success!");
      this.resetForm();
      this.props.history("/dashboard");
    } else {
      console.log("Login failed!");
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="username"
              id="inputEmail"
              value={this.state.data.username}
              onChange={this.handleChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.data.password}
              onChange={this.handleChange}
              id="inputPassword"
            />
          </div>
          <Link className="nav-link active" to="/forgotPassword">
            Forgot Password
          </Link>
          <Link className="nav-link active" to="/signup">
            Sign Up
          </Link>
          <button type="submit" className="btn btn-primary btn-dark">
            Log In
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default () => <Login history={useNavigate()} />;
