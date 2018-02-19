import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './app/store';
import App from './app/components/App';
import './app/style/App.css';
import './index.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App className="App"/>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root;
