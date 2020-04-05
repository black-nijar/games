import React from "react";

const SearchGame = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="searchGame">Search Game</label>
          <input
            className='search-box'
            type='text'
            
          />
        </div>
      </form>
    </div>
  );
};

export default SearchGame;
