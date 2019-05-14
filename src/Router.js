import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import Signup from './components/Signup'
import Login from './components/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={() => <p>Logout</p> } />
    </Switch>
  </BrowserRouter>  
)

export default Router