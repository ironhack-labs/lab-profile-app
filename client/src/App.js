import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Signup from './components/auth/Signup';
import AuthService from "./components/auth/auth-service"
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class App extends Component {

  
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.service = new AuthService()
  }
  render() {
    return (
      <div className="App">
         <Link to={"/signup"}>Sign up</Link>
      
      <Home>
   

      </Home>
  
      </div>
    );
  }
}

export default App;
