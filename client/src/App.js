import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';import { Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home"
import Login from './Components/Login';
import Signup from './Components/Signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default App;
