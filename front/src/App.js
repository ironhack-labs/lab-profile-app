import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./component/HomePage"
import Login from "./component/Login"
import Singup from "./component/Signup"
import authService from './service/authService';
import Profile from './component/Profile';


class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new authService();
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
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Singup}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
