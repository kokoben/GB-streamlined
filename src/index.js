import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './app/store';
import App from './app/components/App';

import './app/style/App.css';
import './index.css';

const target = document.querySelector('#root')

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
