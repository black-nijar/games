import React from "react";

const GamesList = ({ result }) => {
  const listGames = result ? (
    result.data.map(game => (
      <div key={game.Rank } className="card border-dark mb-3" >
        <div className="card-header">Rank : {game.Rank}</div>
        <div className="card-body text-dark">
          <h5 className="card-title">{game.Name}</h5>
        </div>
      </div>
    ))
  ): (
    <div className='loading'>
      <h4>Loading Games</h4>
    </div>
  );
  return(
    <div className='game-list'>
      {listGames}
    </div>
  );
};

export default React.memo(GamesList);
