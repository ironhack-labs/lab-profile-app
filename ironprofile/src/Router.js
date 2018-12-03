import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home              from './components/Home/Home';
import Auth              from './components/Auth/Auth';
import Profile           from './components/Profile/Profile';

const Router = () => (
  <Switch>
    <Route exact path = "/"            component = { Home } />
    <Route exact path = "/signup"      component = { Auth } />
    <Route exact path = "/login"       component = { Auth } />
    <Route exact path = "/profile/" component = { Profile } />
  </Switch>
)

export default Router;