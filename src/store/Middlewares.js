import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

const middlewares = [];

const logger = createLogger({
  // ...options
});

// Connect the sagas to the redux store
export const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
middlewares.push(thunk);
middlewares.push(logger);

if (process.env.NODE_ENV !== 'production') {
  // include other middlewaress as needed, like the invariant and logger middlewaress
  // middlewares.push(invariant());
  // middlewares.push(logger());
}

export default middlewares;
