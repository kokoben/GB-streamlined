import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import { history } from './store';
import App from './app/components/App';
import './app/style/App.css';
import './index.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App className="App" />
      </div>
    </ConnectedRouter>
  </Provider>
);

/* eslint-disable react/forbid-prop-types */
Root.propTypes = {
  store: PropTypes.object.isRequired,
};
/* eslint-enable */

export default Root;
