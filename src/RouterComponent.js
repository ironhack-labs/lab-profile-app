import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login';
import Profile from './components/Profile'
import history from './components/history'

const RouterComponent = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/loggedin" component={Profile} />
      <Route exact path="/logout" component={() => <p>Logout</p> } />
    </Switch>
  </Router>  
)

export default RouterComponent