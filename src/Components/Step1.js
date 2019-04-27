import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_HOUSE } from "../ducks/store";

export default class Step1 extends Component {
  constructor() {
    super();
    const reduxStore = store.getState();
    this.state = {
      id: reduxStore.id,
      name: reduxStore.name,
      address: reduxStore.address,
      city: reduxStore.city,
      state: reduxStore.store,
      zip: reduxStore.store
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        store: store.getState()
      });
    });
  }
  addHouse() {
    store.dispatch({
      type: ADD_HOUSE,
      payload: this.state.input
    });
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
            <Link to="/wizard/Step2">
              <button onClick={() => this.addHouse()}>Next</button>
            </Link>
          </section>
        </form>
      </div>
    );
  }
}
