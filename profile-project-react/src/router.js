import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutApp from "./components/LayoutApp"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import Profile from './pages/Profile'

//const Home = () => <h1>Home</h1>
//const SingUp = () => <h1>SignUp</h1>
//const LogIn = () => <h1>LoginIn</h1>

function router() {
    return (
   <Router>
       <LayoutApp>
           <Switch>
               <Route component={Home} path="/" exact/>
               <Route component={SignUp} path="/signup" exact/>
               <Route component={LogIn} path="/login" exact/>
               <Route component={Profile} path="/profile" exact/>
           </Switch>
       </LayoutApp>
   </Router>
    )
}

export default router
