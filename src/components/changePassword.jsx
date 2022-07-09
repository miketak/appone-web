import React, { Component } from "react";

class ChangePassword extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Change Password</h2>
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Current Password"
              id="currentPassword"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="New Password"
              id="newPassword"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Type Password Again"
              id="newPassword2"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-dark">
            Change Password
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ChangePassword;
