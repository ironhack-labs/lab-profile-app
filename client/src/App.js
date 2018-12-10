import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import { Link, Switch, Route } from "react-router-dom";
import AuthService from './components/Tools'


class App extends Component {
  constructor(){
    super()

    this.state = {
      user: null
    };
    this.authService = new AuthService();
    this.ifLoggedIn()
  }
  
  getUser = user => {
    this.setState({ ...this.state, user });
    console.log(this.state)
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  ifLoggedIn = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  render() {
    const welcome = this.state.user ? (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    ) : (
      <div>
      </div>
    );
    return (
      <div className="App">
       <div className="text-box">
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" render={()=> <Login getUser={this.getUser}/>} />
        <Route exact path="/signup" render={()=> <Signup getUser={this.getUser}/>} />
        </Switch>
        {welcome}
        <div>
          
        </div>
       </div>
      </div>
    );
  }
}

export default App;
