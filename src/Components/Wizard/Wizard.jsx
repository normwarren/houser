import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }
  handleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  //
  addHouse() {}

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <div>
          <Link to="/">
            <button className="btn">Cancel</button>
          </Link>
        </div>
        <form>
          <div />
          <section>
            <label>Property Name</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                id="name"
              />
            </div>

            <label htmlFor="address">Address</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="address"
                id="address"
              />
            </div>
            <label htmlFor="city">City</label>

            <input
              onChange={this.handleChange}
              type="text"
              name="city"
              id="city"
            />

            <label htmlFor="state">State</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="state"
              id="state"
            />
            <label htmlFor="Zip Code">State</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="zip"
              id="zip"
            />

            <button onClick={this.handleClick}>Complete</button>
          </section>
        </form>
      </div>
    );
  }
}
