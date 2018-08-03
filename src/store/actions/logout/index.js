import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function logout() {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.LOGOUT });
      //dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFail(error));
      return Promise.reject();
    }
  };
}

export function logoutSuccess() {
  return { type: t.LOGOUT };
}

export function logoutFail(error) {
  return { type: t.FETCH_JOBS_FAIL, error };
}
