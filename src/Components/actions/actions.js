import { FETCH_GAMES } from "./actionType"

export const fetchGames = (data) => {
  return {
    type: FETCH_GAMES,
    data
  }
}