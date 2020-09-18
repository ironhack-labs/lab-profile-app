import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const Home = () => <h1> Home </h1>
const Login = () => <h1> Login </h1>
const Signup = () => <h1> Signup</h1>
const Profile = () => <h1> Profile </h1>
const Edit = () => <h1> Edit </h1>

const router = () => {

    return (
        <Router>

            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Login} path='/login' />
                <Route component={Signup} path='/signup' />
                <Route component={Profile} path='/currentuser' />
                <Route component={Edit} path='/edit' />
            </Switch>

        </Router>

    )
}

export default router