import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { filteredGames } from "./filteredGames";

export const rootReducer = combineReducers({
  games: gameReducer,
  filteredGames: filteredGames
});
