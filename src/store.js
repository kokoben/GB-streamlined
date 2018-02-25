import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootSaga from './root-saga';
import rootReducer from './root-reducer';

export const history = createHistory();

const configureStore = () => {
  const initialState = {};
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    routerMiddleware(history),
    sagaMiddleware,
    logger,
  ];

  /* eslint-disable no-underscore-dangle */
  // eslint-disable-next-line no-undef
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  /* eslint-enable */

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
