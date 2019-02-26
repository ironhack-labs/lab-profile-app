// App.js

import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navBar/NavBar';
import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/auth-service';

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
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>
            <Route exact path="/projects" component={ProjectList}/>
            <Route exact path="/projects/:id" component={ProjectDetails} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch> 
  <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
  <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
  <Route exact path="/projects" component={ProjectList}/>
  <Route exact path="/projects/:id" component={ProjectDetails} />   
</Switch>
        </div>
      );
    }
  }
}
export default App;

