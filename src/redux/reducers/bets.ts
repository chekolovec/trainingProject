import { ADD_BET, DELETE_BET } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BET:

      return [...state, Object.assign(action.betObj, {
        gameId: action.gameId,
        marketId: action.marketId,
      })];
      
    case DELETE_BET:

      return state.filter((item) => item.id !== action.betObj.id);

    default:
      return state;
  }
};
