import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withUser } from '../../../lib/withUser';
import { HomePage } from '../../pages/Home.page';

export const App = withUser(() => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
});
