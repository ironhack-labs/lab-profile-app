import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Edit from "./components/Edit"

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/edit" component={Edit} />
  </Switch>
)
