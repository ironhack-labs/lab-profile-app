import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import Home from './pages/Home'

const Login=()=><h1>Login</h1>
const Signup=()=><h1>Signup</h1>
const Profile=()=><h1>Profile</h1>


function AppRouter() {
    return (
        <BrowserRouter>
        <LayoutApp>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
        </LayoutApp>
        </BrowserRouter>
    )
}

export default AppRouter
