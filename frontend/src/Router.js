import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
)

export default Router
