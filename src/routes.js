import React from 'react';
import {Route} from 'react-router';

import MainLayout from './components/layouts/MainLayout';
import HomePage from './components/pages/HomePage';
import BasicLead from './components/pages/BasicLead';
import FinanceDriverShort from './components/pages/FinanceDriverShort';
import NotFoundPage from './components/pages/NotFound';

export default (
  <Route component={MainLayout}>
    <Route path='/' component={HomePage} />
    <Route name='FDShort' path='/FinanceDriverShort' component={FinanceDriverShort} />
    <Route path='/BasicLead' component={BasicLead} />
    <Route path='*' component={NotFoundPage} />
  </Route>
);
