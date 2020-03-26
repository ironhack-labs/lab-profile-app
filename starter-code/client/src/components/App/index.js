import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withLoading } from '../../../lib/withLoading';
import { HomePage } from '../../pages/Home.page';

export const App = withLoading(() => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
});
