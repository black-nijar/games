import React, { Component } from "react";
import { Link } from "react-router-dom";

export class GameDetail extends Component {
  state = {
    game: {},
  };
  componentDidMount() {
    const { game } = this.props.location;
    this.setState({ game });
  }
  render() {
    const {
      game: { Rank, Year, Publisher, Genre, Platform, Name, Global_Sales },
    } = this.state;
    return (
      <div
        className="container"
        style={{ margin: "auto", width: "450px", marginTop: "20px" }}
      >
        <div className="game-detail">
          <div className="card bg-light mb-3">
            <h4 className="card-header">Game Detail</h4>
            <div className="card-body">
              <h5>Rank : {Rank}</h5>
              <h5>Name : {Name}</h5>
              <h5>Platform : {Platform}</h5>
              <h5>Year : {Year}</h5>
              <h5>Genre: {Genre}</h5>
              <h5>Publisher: {Publisher}</h5>
              <h5>Global_Sales: {Global_Sales}</h5>
            </div>
            <Link style={{textAlign: "center"}} to='/'><h5>Back</h5></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameDetail;
