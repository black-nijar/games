import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchGames } from "../actions/actions";
import SearchGame from "./SearchGame";
import GamesList from "./GamesList";

class Home extends Component {
  componentDidMount() {
    axios
      .get(`http://starlord.hackerearth.com/TopSellingGames`)
      .then((res) => this.props.fetchGames(res.data))
      .catch((err) => console.log("ERROR WHILE FETCHING :", err));
  }
  render() {
    return (
      <div className="container">
        <h2 className="game-title">Top selling games of the world</h2>
        <SearchGame />
        <GamesList />
      </div>
    );
  }
}

export default connect(null, { fetchGames })(Home);
