import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Step3 extends Component {
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
        <form>
          <div />
          <section>
            <label>Monthly Mortgage Amount</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="mortgage"
                id="mortgage"
              />
            </div>

            <label htmlFor="rent">Desired Monthly Rent</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="rent"
                id="rent"
              />
            </div>
            <Link to="/">
              <button onClick={this.handleClick}>Complete</button>
            </Link>
          </section>
        </form>
      </div>
    );
  }
}
