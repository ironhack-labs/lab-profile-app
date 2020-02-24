import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'

export const Router = () => (
  <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
    </BrowserRouter>
  </>
)

export default Router