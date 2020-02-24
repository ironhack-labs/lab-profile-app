import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/Singup'
//import Profile from './pages/profile'
const Profile = () => <h1>profile</h1>;
//const Signup = () => <h1>signup</h1>;
//const Login = () => <h1>login</h1>
//const Home = () => <h1>Home</h1>

//<Navbar />
export const Router = () => (
  <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
    </BrowserRouter>
  </>
)

export default Router