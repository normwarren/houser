import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  getHouses() {}
  deleteHouse() {}

  // componentDidMount() {
  //   axios.get('/api/animals').then(res => {
  //     this.setState({
  //       animals: res.data
  //     })
  //   }).catch(err => console.log('we have a problem:', err))
  // }

  render() {
    const houses = this.state.houses.map(house => {
      return <House key={house.id} house={house} />;
    });
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <Link to="/wizard">
            <button className="btn">Add New Property</button>
          </Link>
        </div>
        <div className="card_container">{houses}</div>
      </div>
    );
  }
}
