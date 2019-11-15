import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
  </Switch>
)

export default Router;