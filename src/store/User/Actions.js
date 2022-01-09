import { createActions } from 'reduxsauce';

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Store/Example/Reducers.js
 * - to trigger sagas, for example in App/Saga/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in @App/App.js
 * - in sagas using `yield put(...)`, for example in App/Saga/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  updateUserStore: ['data'],

  fetchGetUsersByKeyword: ['page', 'pageSize', 'keyword'],
  fetchGetUsersByKeywordSuccess: ['data'],
  fetchGetUsersByKeywordFailure: ['error'],

  fetchGetUsers: ['page', 'pageSize', 'keyword'],
  fetchGetUsersSuccess: ['data'],
  fetchGetUsersFailure: ['error'],

  fetchGetFriends: ['page', 'pageSize'],
  fetchGetFriendsSuccess: ['data'],
  fetchGetFriendsFailure: ['error'],

  fetchGetTags: ['page', 'pageSize'],
  fetchGetTagsSuccess: ['data'],
  fetchGetTagsFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;
