//import logo from './logo.svg';

import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage'
import Login from './components/Login'
import Signup from './components/Signup'
import AuthService from './services/authService'
import Avatar from "./components/Avatar";


export default class App extends Component {
  state = {
    loggedInUser: null
  }

  service = new AuthService()

  componentDidMount(){
   this.service.loggedin()
   .then(user => {
     this.setState({
      loggedInUser: user
     })
   })
   .catch(err => {
     console.log(err)
   })
  }

  getTheUser = user => {
    this.setState({
     loggedInUser: user
    })
  }
  
  
  render() {
    console.log(this.state)
    return (
      <div>
       <Homepage getTheUser={this.getTheUser}/>
       {this.state.loggedInUser && (
         <div>
           {`Hello ${this.state.loggedInUser.username}, welcome back!`}
           <img src={`http://localhost:5000/uploads/${this.state.loggedInUser.imageUrl}`}
              alt="user avatar"/>
         </div>
       )}
       
         <Switch>
         <Route exact path="/upload" component={Avatar} />
         <Route exact path='/signup' component={Signup} />
        <Route exact  path="/login" render={() => <Login getTheUser={this.getTheUser} />} />
      </Switch>
      </div>
    )
  }
}


