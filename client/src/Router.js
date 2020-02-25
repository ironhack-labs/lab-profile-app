import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Profile from './pages/profile'
import NotFound from './pages/notfound'

const Router = () => {
    return (
        
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        
    )
}

export default Router