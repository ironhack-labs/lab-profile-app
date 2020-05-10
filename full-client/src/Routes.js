import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Signup} path="/signup" />
      <Route exact component={Login} path="/login" />
      <Route exact component={Profile} path="/profile" />
    </Switch>
  </Router>
);

export default AppRouter;
