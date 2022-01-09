import { reducer as ExampleReducer } from './Example/Reducers';
import { reducer as UserReducer } from './User/Reducers';

/**
 * Import Reduces, prepare to export
 */

const reducers = {
  /**
   * Register your reducers here.
   *
   * @see https://redux.js.org/api-reference/combinereducers
   */
  example: ExampleReducer,
  user: UserReducer,
};

export default reducers;
