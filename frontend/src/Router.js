import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup.js'
import Profile from './component/Profile'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/edit" component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router