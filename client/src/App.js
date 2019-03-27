import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Signup from './components/auth/Signup';
import AuthService from "./components/auth/auth-service"
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.service = new AuthService()
  }
  render() {
    return (
      <div className="App">
        < Home/>
        <Switch>
  <Route exact path="/signup" component={Signup}/>
  
    </Switch>
      </div>
    );
  }
}

export default App;
