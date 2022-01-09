import { all, call, delay, takeEvery, takeLatest } from 'redux-saga/effects';

import { UserTypes } from '~/store/User/Actions';

import * as UserSaga from './UserSaga';

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    // takeLatest(StartupTypes.STARTUP, startup),

    // User Watchers
    takeLatest(UserTypes.FETCH_GET_USERS, UserSaga.fetchGetUsers),
    takeLatest(UserTypes.FETCH_GET_TAGS, UserSaga.fetchGetTags),
    takeLatest(UserTypes.FETCH_GET_FRIENDS, UserSaga.fetchGetFriends),
    takeLatest(UserTypes.FETCH_GET_USERS_BY_KEYWORD, UserSaga.fetchGetUsersByKeyword),
  ]);
}
