import { call, put } from 'redux-saga/effects';

import { Handler, User } from '~/api';
import { t } from '~/helpers';
import { UserActions } from '~/store/Actions';

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user information.
 * Feel free to remove it.
 */
export function* fetchGetUsersByKeyword({ page, pageSize, keyword }) {
  console.log('keyword=>', keyword);
  try {
    const res = yield call(
      Handler.get({
        baseURL: 'https://avl-frontend-exam.herokuapp.com',
      }),
      User.getUsers({ page, pageSize, keyword }),
    );
    if (res.data) {
      yield put(UserActions.fetchGetUsersByKeywordSuccess(res.data));
    } else {
      yield put(
        UserActions.fetchGetUsersByKeywordFailure(
          'There was an error while fetching user information.',
        ),
      );
    }
  } catch (error) {
    // logger.error(error);
    yield put(UserActions.fetchGetUsersByKeywordFailure(error.message));
  }
}

export function* fetchGetUsers({ page, pageSize }) {
  try {
    const res = yield call(
      Handler.get({
        baseURL: 'https://avl-frontend-exam.herokuapp.com',
      }),
      User.getUsers({ page, pageSize }),
    );
    if (res.data) {
      yield put(UserActions.fetchGetUsersSuccess(res.data));
    } else {
      yield put(
        UserActions.fetchGetUsersFailure('There was an error while fetching user information.'),
      );
    }
  } catch (error) {
    // logger.error(error);
    yield put(UserActions.fetchGetUsersFailure(error.message));
  }
}

export function* fetchGetFriends({ page, pageSize }) {
  try {
    const res = yield call(
      Handler.get({
        baseURL: 'https://avl-frontend-exam.herokuapp.com',
      }),
      User.getFriends({ page, pageSize }),
    );

    if (res.data) {
      yield put(UserActions.fetchGetFriendsSuccess(res.data));
    } else {
      yield put(
        UserActions.fetchGetFriendsFailure('There was an error while fetching user information.'),
      );
    }
  } catch (error) {
    // logger.error(error);
    yield put(UserActions.fetchGetFriendsFailure(error.message));
  }
}

export function* fetchGetTags({ page, pageSize }) {
  try {
    const res = yield call(
      Handler.get({
        baseURL: 'https://avl-frontend-exam.herokuapp.com',
      }),
      User.getTags({ page, pageSize }),
    );

    if (res.data) {
      yield put(
        UserActions.fetchGetTagsSuccess({
          data: res.data,
          totalPages: 1,
          page: 1,
        }),
      );
    } else {
      yield put(
        UserActions.fetchGetTagsFailure('There was an error while fetching user information.'),
      );
    }
  } catch (error) {
    // logger.error(error);
    yield put(UserActions.fetchGetTagsFailure(error.message));
  }
}
