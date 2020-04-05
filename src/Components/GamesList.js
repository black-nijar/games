import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const GamesList = ({ gamesList, filteredGames }) => {
  const games = filteredGames.length > 0 ? filteredGames : gamesList;
  const listGames = games ? (
    games.map((game) => (
      <div key={game.Rank} className="card border-dark mb-3">
        <div className="card-header">Rank : {game.Rank}</div>
        <div className="card-body text-dark">
          <h5 className="card-title">{game.Name}</h5>
          <div>
            <Link
              to={{
                pathname: `/game/${game.Name}`,
                game: game,
              }}
            >
              Click here{" "}
            </Link>{" "}
            to see detail
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="loading">
      <h4>Loading Games...</h4>
    </div>
  );
  return <div className="game-list">{listGames}</div>;
};

const mapStateToProps = (state) => {
  return {
    gamesList: state.games,
    filteredGames: state.filteredGames,
  };
};
export default connect(mapStateToProps)(GamesList);
