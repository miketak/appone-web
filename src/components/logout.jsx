import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    this.props.history("/");
    window.location.reload();
  }
  render() {
    return null;
  }
}

// TODO: Below is a hack. Fix this.
export default () => <Logout history={useNavigate()} />;
