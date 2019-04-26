import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  addHouse = house => {
    axios
      .post("/api/house", house)
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log("we have a problem:", err));

    // this.getInventory();
    // this.clearInputClick();
  };

  handleClick = () => {
    let { name, address, city, state, zip } = this.state;
    let house = { name, address, city, state, zip };
    this.addHouse(house);
  };
  handleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

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
            <label htmlFor="zip">Zip</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="zip"
              id="zip"
            />
            <Link to="/">
              <button onClick={this.handleClick}>Complete</button>
            </Link>
          </section>
        </form>
      </div>
    );
  }
}
