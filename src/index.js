import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore'; // eslint-disable-line import/default

import 'fusion-theme/dist/fusion-theme.min.css'; // eslint-disable-line
import './styles/index.scss';

const store = configureStore();

// Don't need React Router?
// Reference your top level component instead of <Router> below
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
