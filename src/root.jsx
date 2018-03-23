import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history } from './store';
import App from './app/components/App';
import NotFound from './app/components/not-found';
import './app/style/App.css';
import './index.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          {/* need to include all paths to get into the main app
           so that 404 page can be placed outside the app's scope
           need to find a cleaner way to implement this..
          */}
          <Route exact path="/" component={App} />
          <Route exact path="/quicklooks" component={App} />
          <Route exact path="/features" component={App} />
          <Route exact path="/bombcasts" component={App} />
          <Route path="*" component={NotFound} />
        </Switch>
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
