import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import signup from './pages/signup'
import login from './pages/login'
import profile from './pages/profile';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={login} />
      <Route exact path="/signup" component={signup} />
      <Route exact path='/profile' component={profile}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router