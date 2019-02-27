import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Edit from './components/Edit';
import Profile from './components/Profile';

import service from "./components/auth/service"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { logged: null }
    this.service = new service()
  }

  getUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
          <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
          <Route exact path="/edit" render={() => <Edit getUser={this.getUser} />} />
          <Route exact path="/profile" render={() => <Profile getUser={this.getUser} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
