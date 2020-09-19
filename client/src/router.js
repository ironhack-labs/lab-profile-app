import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"


const router = () => { 
    return(
    <Router>
        <Switch>
            <Route component={Home} path="/" exact></Route>
            <Route component={Login} path="/login" exact></Route>
            <Route component={Signup} path="/signup" exact></Route>
            <Route component={Profile} path="/profile" exact></Route>
        </Switch>
    </Router>
    )
}

export default router