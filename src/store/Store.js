/* eslint-disable import/no-import-module-exports */

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import PersistConfig from '~/config/persistConfig';
import rootSaga from '~/sagas';

import PackageJson from '../../package.json';
import enhancers from './Enhancers';
import middleware, { sagaMiddleware } from './Middlewares';
import reducers from './Reducers';

const storeCreator = () => {
  // Redux persist
  const persistedReducers = persistReducer(PersistConfig, combineReducers(reducers));

  const createMiddlewareEnhancer = () => {
    if (process.env.NODE_ENV !== 'production') {
      const composeEnhancers = (
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
        // eslint-disable-next-line global-require
        require('remote-redux-devtools').composeWithDevTools
      )({
        name: `web-${PackageJson.name}`,
        trace: true,
        traceLimit: 10,
      });
      return composeEnhancers(applyMiddleware(...middleware), ...enhancers);
    }
    return compose(applyMiddleware(...middleware), ...enhancers);
  };

  const store = createStore(persistedReducers, createMiddlewareEnhancer());

  // Enable hot module replacement for reducers
  if (module.hot) {
    module.hot.accept(async () => {
      const nextRootReducer = await import('~/store/Reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = storeCreator();

export const persistor = persistStore(store);

export default store;
