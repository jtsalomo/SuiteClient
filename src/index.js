import React from 'react';
import {render} from 'react-dom';

import configureStore from './store/configureStore'; // eslint-disable-line import/default

import CustomerRecord from './components/pages/CustomerRecord';

import 'fusion-theme/dist/fusion-theme.min.css'; // eslint-disable-line
import './styles/index.scss';

const store = configureStore();

// Don't need React Router?
// Reference your top level component instead of <Router> below
render(
    <CustomerRecord store={store} />
  , document.getElementById('app')
);
