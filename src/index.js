import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './app/store';
import App from './app/components/App';

import './app/style/App.css';
import './index.css';

const target = document.querySelector('#root')
const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App className="App"/>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
