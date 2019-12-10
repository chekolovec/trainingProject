import { combineReducers } from 'redux';

import data from './data';
import bets from './bets'

const reducer = combineReducers({
    data,
    bets
})

export default reducer