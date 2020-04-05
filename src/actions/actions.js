import { FETCH_GAMES, SEARCH_GAMES } from "./actionType"

export const fetchGames = (data) => {
  return {
    type: FETCH_GAMES,
    data
  }
};

export const searchGame = (searchText, games) => {
  return {
    type: SEARCH_GAMES,
    payload: {
      searchText,
      games
    }
  }
};