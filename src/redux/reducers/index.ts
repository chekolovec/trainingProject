import { combineReducers } from "redux";

import bets from "./bets";
import data from "./data";

const reducer = combineReducers({
  data,
  bets,
});

export default reducer;
