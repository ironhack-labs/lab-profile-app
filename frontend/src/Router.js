import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Router.css';
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/loggedin" component={Profile} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
