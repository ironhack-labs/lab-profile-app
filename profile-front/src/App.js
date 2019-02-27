import React, { Component } from 'react';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import HomePage from './components/home/HomePage'
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/Auth-service';
import Profile from './components/profile/Profile';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

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
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser}/>}/>
          <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
