import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withUser } from '../../../lib/withUser';
import { HomePage } from '../../pages/Home.page';
import { SignupPage } from '../../pages/Signup.page.js';
import { LoginPage } from '../../pages/Login.page.js';
import { ProfilePage } from '../../pages/Profile.page';

export const App = withUser(() => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/profile' component={ProfilePage} />
      </Switch>
    </Router>
  );
});
