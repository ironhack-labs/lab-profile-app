import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import authService from './Components/authService';

class App extends Component {
  constructor() {
    super()
    this.state = {
      getTheUser: null
    }
    this.service = new authService();
  }
  fetchUser = () => {
    this.service
      .loggedin()
      .then(user => this.setState({ ...this.state, user }))
  }

  getTheUser = user => {
    this.setState({
      loggedInUser: user
    })
  }

  logout = () => {
    this.service
    .logout()
    .then(()=>{
      this.setState({...this.state, user:null})
    })
  }
  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/profile" render={() => <Profile userInSession={this.state.loggedInUser} />} />
          </Switch>
        </div>
      )
    }
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser} />} />
          {/* <Route exact path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
