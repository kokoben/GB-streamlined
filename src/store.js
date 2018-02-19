import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './root-saga';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './root-reducer';

export const history = createHistory();

const configureStore = () => {
  const initialState = {};
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    routerMiddleware(history),
    sagaMiddleware,
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

  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
