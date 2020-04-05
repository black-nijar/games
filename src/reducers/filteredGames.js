import { SEARCH_GAMES } from "../actions/actionType";

const initState = [];

export const filteredGames = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_GAMES:
      const { searchText, games } = action.payload;
      const filteredResult = games.filter((game) => {
        const name = game.Name.toLowerCase();
        const filter = searchText.toLowerCase();
        return name.includes(filter);
      });
      return filteredResult;
    default:
      return state;
  }
};
