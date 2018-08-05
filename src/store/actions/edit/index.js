import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

// payload object of new updated key values
export function edit(username, payload) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.UPDATE_USER_REQUEST });
      // call the API for whatever our search is
      // WILL GET full current user object back
      let currentUser = await callAPI(
        'PATCH',
        `/users/${username}`,
        true,
        payload
      );
      // dispatch the success action creator and the current that we got back
      dispatch(fetchPatchedUserSuccess(currentUser));
    } catch (error) {
      // debugger;
      dispatch(fetch(error));
      return Promise.reject();
    }
  };
}

export function fetchPatchedUserSuccess(currentUser) {
  return { type: t.UPDATE_USER_SUCCESS, currentUser };
}

export function fetchPatchedUserFail(error) {
  return { type: t.UPDATE_USER_FAIL, error };
}
