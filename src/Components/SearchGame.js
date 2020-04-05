import React from "react";
import { connect } from "react-redux";
import { searchGame } from "../actions/actions";

const SearchGame = ({ searchGame, games }) => {
  return (
    <div className="search-game">
      <form className="form">
        <div>
          <label htmlFor="searchGame">Search Game</label>
          <input
            className="form-control"
            type="text"
            placeholder="Search by name"
            onChange={(e) => searchGame(e.target.value, games)}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps, { searchGame })(SearchGame);
