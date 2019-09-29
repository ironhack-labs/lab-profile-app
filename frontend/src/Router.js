import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from './components/Profile';

const Router = () => (
  <section className="section">
    <div className="container">
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
    </div>
  </section>
);

export default Router;
