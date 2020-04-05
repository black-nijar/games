import { FETCH_GAMES } from "../actions/actionType";

const initState = [];

export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return action.data;
    default:
      return state;
  }
};
