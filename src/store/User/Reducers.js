/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { isArray, uniqBy } from 'lodash';
import { createReducer } from 'reduxsauce';

import { UserTypes } from './Actions';
import { INITIAL_STATE } from './InitialState';

export const fetchDataLoading = (key) => (state) => ({
  ...state,
  [key]: {
    // eslint-disable-next-line react/destructuring-assignment
    ...state[key],
    isFetching: true,
    errorMessage: null,
  },
});

/* eslint-disable react/destructuring-assignment */
export const fetchDataSuccess =
  (key) =>
  (state, { data }) => ({
    ...state,
    [key]: {
      ...data,
      items: isArray(state[key].items)
        ? uniqBy([...state[key].items, ...data.data], 'id')
        : data.data,
      hasMore: data.totalPages > data.page,

      isFetching: false,
      errorMessage: null,
    },
  });
/* eslint-enable react/destructuring-assignment */

export const fetchDataFailure =
  (key) =>
  (state, { error }) => ({
    ...state,
    [key]: {
      ...state[key],
      isFetching: false,
      errorMessage: error,
    },
  });

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.UPDATE_USER_STORE]: (state, { data }) => ({
    ...state,
    ...data,
  }),

  [UserTypes.FETCH_GET_USERS]: fetchDataLoading('user'),
  [UserTypes.FETCH_GET_USERS_SUCCESS]: fetchDataSuccess('user'),
  [UserTypes.FETCH_GET_USERS_FAILURE]: fetchDataFailure('user'),

  [UserTypes.FETCH_GET_USERS_BY_KEYWORD]: fetchDataLoading('userByKeyword'),
  [UserTypes.FETCH_GET_USERS_BY_KEYWORD_SUCCESS]: fetchDataSuccess('userByKeyword'),
  [UserTypes.FETCH_GET_USERS_BY_KEYWORD_FAILURE]: fetchDataFailure('userByKeyword'),

  [UserTypes.FETCH_GET_FRIENDS]: fetchDataLoading('friend'),
  [UserTypes.FETCH_GET_FRIENDS_SUCCESS]: fetchDataSuccess('friend'),
  [UserTypes.FETCH_GET_FRIENDS_FAILURE]: fetchDataFailure('friend'),

  [UserTypes.FETCH_GET_TAGS]: fetchDataLoading('tag'),
  [UserTypes.FETCH_GET_TAGS_SUCCESS]: fetchDataSuccess('tag'),
  [UserTypes.FETCH_GET_TAGS_FAILURE]: fetchDataFailure('tag'),
});
