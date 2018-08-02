import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function search(searchCat, searchTerm) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_SEARCH_REQUEST });
      // call the API for whatever our search is /{searchCat}?search={term}, auth required
      let search = await callAPI(
        'get',
        `/${searchCat}?search=${encodeURI(searchTerm)}`,
        true
      );
      // dispatch the success action creator and the jobs that we got back
      dispatch(fetchSearchSuccess(search));
    } catch (error) {
      dispatch(fetchSearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchSearchSuccess(search) {
  return { type: t.FETCH_SEARCH_SUCCESS, search };
}

export function fetchSearchFail(error) {
  return { type: t.FETCH_SEARCH_FAIL, error };
}
