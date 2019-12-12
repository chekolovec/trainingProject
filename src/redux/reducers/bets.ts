import { TOGGLE_BET } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case TOGGLE_BET:
      if (state.some((item) => item.id === action.betObj.id)) {
        return state.filter((item) => item.id !== action.betObj.id);
      }
      return [...state, Object.assign(action.betObj, {
        gameId: action.gameId,
        marketId: action.marketId,
      })];

    default:
      return state;
  }
};
