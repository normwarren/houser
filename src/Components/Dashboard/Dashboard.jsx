import React, { Component } from "react";
import axios from "axios";
import House from "../House/House";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  deleteHouse = id => {
    axios
      .delete(`/api/house/${id}`)
      .then(res => {
        this.setState({
          houses: res.data
        });
      })
      .catch(err => console.log("we have a problem:", err));
  };

  getHouses() {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({
          houses: res.data
        });
      })
      .catch(err => console.log("we have a problem:", err));
  }
  componentDidMount() {
    this.getHouses();
  }

  render() {
    const houses = this.state.houses.map(house => {
      return (
        <House
          key={house.id}
          house={house}
          deleteHouse={this.deleteHouse}
          getHouses={this.getHouses}
        />
      );
    });
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <Link to="/wizard/step1">
            <button className="btn">Add New Property</button>
          </Link>
        </div>
        <div className="card_container">{houses}</div>
      </div>
    );
  }
}
