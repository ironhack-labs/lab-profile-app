import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Logout from './components/Logout';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null
    }
  }

  getUser = (userObject) => {
    this.setState({
      loggedinUser: userObject
    })
    this.setState({
      loggedInUser: userObject
    }, () => {
      localStorage.setItem('loggedInUser', JSON.stringify(this.state.loggedInUser))
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/"><Homepage /></Route>
        <Route path="/signup" render={props => <Signup {...props} user={this.state.loggedInUser} callback={this.getUser} />} />
        <Route path="/login" render={props => <Login {...props} user={this.state.loggedInUser} callback={this.getUser} />} />
        <Route path="/logout" render={props => <Logout {...props} user={this.state.loggedInUser} callback={this.getUser} />} />
        <Route path="/profile/" render={props => <Profile {...props} user={this.state.loggedInUser} state={this.state}/>} />

      </Switch>
    )
  }
}
