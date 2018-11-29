import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
  </Switch>
)

export default Router;