import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function fetchCurrentUserRequest(username) {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_CURRENT_USER_REQUEST });
      // make request to get current user can get current user from
      // what we pass in
      // endpoint: /users/{username}
      let userInfo = await callAPI('GET', `/users/${username}`, true);
    } catch (err) {
      dispatch(fetchCurrentUserRequest(err));
      return Promise.reject();
    }
  };
}
