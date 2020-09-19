import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutPage from "./components/LayoutPage"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'

const Edit = () => <h1> Edit </h1>

const router = () => {

    return (
        <Router>
            <LayoutPage>

                <Switch>
                    <Route component={Home} path='/' exact />
                    <Route component={Login} path='/login' />
                    <Route component={Signup} path='/signup' />
                    <Route component={Profile} path='/profile' />
                    <Route component={Edit} path='/edit' />
                </Switch>

            </LayoutPage>

        </Router >

    )
}

export default router