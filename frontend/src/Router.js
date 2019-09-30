import React from 'react';
import './App.css';
import Home from "./components/Home"
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function Router() {
  return (
   <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/auth/signup" component={Signup}/>
       <Route exact path="/auth/login" component={Login}/>
       <Route exact path="/auth/profile" component={Profile}/>
     </Switch>
   </BrowserRouter>
  );
}

export default Router;
//<img src={oval} style={{width: '65vw', height: '65vh'}} className="App-logo" alt="logo" />