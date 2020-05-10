import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Signup} path="/signup" />
      <Route exact component={Login} path="/login" />
    </Switch>
  </Router>
);

export default AppRouter;
