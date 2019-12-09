import React from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SignupContainer from "./components/SignUp"
import LoginContainer from "./components/Login"
import Home from './components/Home/Home'
import Profile from './components/Profile';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupContainer}/>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;