import React, { Component } from "react";
import axios from "axios";
import GamesList from "./GamesList";

class Home extends Component {
  state = {
    result: '',
  };
  componentDidMount() {
    axios
      .get(`http://starlord.hackerearth.com/TopSellingGames`)
      .then((result) => this.setState({ result }))
      .catch((err) => console.log("ERROR WHILE FETCHING", err));
  }
  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <h2 className="game-title">Top selling games of the world</h2>
        <GamesList result={result}/>
      </div>
    );
  }
}

export default Home;
