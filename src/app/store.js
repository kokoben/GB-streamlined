import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './root-reducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  routerMiddleware(history),
  createSagaMiddleware(),
  logger
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
