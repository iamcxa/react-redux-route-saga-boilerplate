/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  user: {
    total: -1,
    totalPages: -1,
    page: 1,
    pageSize: 30,
    // users
    items: [],

    // single
    detail: {},

    isFetching: true,
    errorMessage: null,
  },

  userByKeyword: {
    total: -1,
    totalPages: -1,
    page: 1,
    pageSize: 10,
    // users
    items: [],

    // single
    detail: {},

    isFetching: true,
    errorMessage: null,
  },

  friend: {
    total: -1,
    totalPages: -1,
    page: 1,
    pageSize: 30,
    items: [],
    detail: {},
    isFetching: true,
    errorMessage: null,
  },

  tag: {
    total: -1,
    totalPages: -1,
    page: 1,
    pageSize: 30,
    items: [],
    detail: {},
    isFetching: true,
    errorMessage: null,
  },
};
