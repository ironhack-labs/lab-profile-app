import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import Home from '../src/components/Home'
import Signup from '../src/components/Signup'
import Login from '../src/components/Login'
import Profile from '../src/components/Profile'

function App() {
  return (
    <BrowserRouter>
    <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/profile" component={Profile}/>
    </div>
    </BrowserRouter>
  )
}

export default App;
