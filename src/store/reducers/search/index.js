import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];
// will be an array of objects

export default function searchReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_SEARCH_SUCCESS: {
      return action.search;
    }
    case t.LOGOUT: {
      return DEFAULT_STATE;
    }
    default:
      return state;
  }
}
