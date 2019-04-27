import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <div>
          <Link to="/">
            <button className="btn">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}
