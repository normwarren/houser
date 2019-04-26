import React, { Component } from "react";
import "./House";

export default class House extends Component {
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
      </div>
    );
  }
}
