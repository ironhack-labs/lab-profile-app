import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/Profile" component={Profile} />
      <Route exact path="/auth/loggedin/edit" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Router;