import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
)

export default Router;