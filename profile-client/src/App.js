import React, { Component } from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import AuthService from './services/Auth'

export default class App extends Component {
  state = { loggedInUser: null }

  service = new AuthService()
 
  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }
 
  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
 
  render() {
    this.fetchUser()
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} userInSession={this.state.loggedInUser}/>}/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' render={() => <Profile getUser={this.getTheUser} userInSession={this.state.loggedInUser}/>}/>
      </Switch>
    </div>
    )
  }
}

