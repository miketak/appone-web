import React, { Component } from "react";

class Quotation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Quotation Page</h2>
        <ul>
          <li>
            <a href="#">Create Quotation</a>
          </li>
          <li>
            <a href="#">Retrieve Quotations</a>
          </li>
          <li>
            <a href="#">Update Quotation</a>
          </li>
          <li>
            <a href="#">Delete Quotation</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Quotation;
