import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/auth/login" component={Login}/>
      <Route exact path="/auth/profile" component={Profile}/>
    </Switch>
  </BrowserRouter>
);

export default Router;