import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
    </Switch>
) 

export default Router