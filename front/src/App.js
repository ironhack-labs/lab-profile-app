import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Signup from './Components/Auth/signup';
import Login from './Components/Auth/login';
import AuthService from './Components/Auth/auth-service';
import Profile from './Components/Auth/profile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({ loggedInUser: response })
        })
        .catch(err => this.setState({ loggedInUser: false }))
    }
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout().then(() => {
      this.setState({
        loggedInUser: null
      })
    })
  }

  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div>
          <button onClick={this.logout}>Log out</button>
          {/* <h3>Welcome back, {this.state.loggedInUser.username}</h3> */}
          <Profile user={this.state.loggedInUser} path="/profile" component={Profile} />
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
            <Route path='/login' render={() => <Login getUser={this.getTheUser} />} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
