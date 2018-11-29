import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import Profile from './Components/Profile/Profile';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/profile' component={Profile} />
  </Switch>
)

export default Router;