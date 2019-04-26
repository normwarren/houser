import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class House extends Component {
  constructor() {
    super();
  }
  //
  handleDelete = () => {
    this.props.deleteHouse(this.props.house.id);
    //this.props.getHouses();
  };

  render() {
    let { house } = this.props;
    return (
      <div style={{ border: "1px solid #eee", margin: 10 }}>
        <img src={house.img} alt="" width="200" />
        <p>Property Name: {house.name}</p>
        <p>Address: {house.address}</p>
        <p>City: {house.city}</p>
        <p>State: {house.state}</p>
        <p>Zip: {house.zip}</p>
        <Link to="/">
          <button onClick={this.handleDelete}>Delete</button>
        </Link>
      </div>
    );
  }
}
