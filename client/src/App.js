import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';import { Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home"
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';


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
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
          <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
          <Route exact path='/profile' render={() => <Profile getUser={this.getTheUser}/>}/>

        </Switch>
      </div>
    );
  }
}

export default App;
