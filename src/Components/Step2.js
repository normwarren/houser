import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_HOUSE_IMG } from "../ducks/store";

export default class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }

  // handleClick = () => {
  //   let { name, address, city, state, zip } = this.state;
  //   let house = { name, address, city, state, zip };
  //   //this.addHouse(house);
  // };

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
            <label>Image URL</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="img"
                id="img"
              />
            </div>

            <label htmlFor="address">Address</label>

            <Link to="/wizard/Step1">
              <button onClick={this.handleClick}>Previous</button>
            </Link>
            <Link to="/wizard/Step3">
              <button onClick={this.handleClick}>Next</button>
            </Link>
          </section>
        </form>
      </div>
    );
  }
}
