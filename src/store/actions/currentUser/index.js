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
      dispatch(fetchCurrentUserSuccess(userInfo));
    } catch (err) {
      dispatch(fetchCurrentUserFail(err));
      return Promise.reject();
    }
  };
}

function fetchCurrentUserSuccess(user) {
  return {
    type: t.FETCH_CURRENT_USER_SUCCESS,
    user
  };
}

function fetchCurrentUserFail(error) {
  return {
    type: t.FETCH_CURRENT_USER_FAIL,
    error
  };
}
