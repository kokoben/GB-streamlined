import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './app/store';
import Root from './root';

const target = document.querySelector('#root')
const store = configureStore();

render(
  <Root store={store} history={history} />,
  target
)
