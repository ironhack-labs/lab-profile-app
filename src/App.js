import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/signUp';
import Login from './components/LogIn'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      
      <div className="App">  
        <div className="welcomeMsg">
          <h1>IronProfile</h1>
          <h3>Today we willcreate an app with authoritation, addingsome coo styles!</h3>
        </div>  
        <Signup />
        <Login />       
      </div>
    );
  }
}

export default App;
