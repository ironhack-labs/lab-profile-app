import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

export const Router = () => (
    <>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
        </Switch>
    </>
)

export default Router