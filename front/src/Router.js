import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const Profile=()=><h1>Profile</h1>


function AppRouter() {
    return (
        <BrowserRouter>
        <LayoutApp>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/auth/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
        </LayoutApp>
        </BrowserRouter>
    )
}

export default AppRouter
