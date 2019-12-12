import { DATA_RECEIVED } from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
    case DATA_RECEIVED:
      return action.data;
    default:
      return state;
  }
}

export default reducer;
