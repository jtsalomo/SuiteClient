import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MainLayout from './components/layouts/MainLayout';

import HomePage from './components/pages/HomePage';

import NotFoundPage from './components/pages/NotFound';

export default (
  <Route component={MainLayout}>
    <Route path='/' component={HomePage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
);
