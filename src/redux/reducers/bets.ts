import * as types from '../../constants/ActionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.TOGGLE_BET:
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
}
