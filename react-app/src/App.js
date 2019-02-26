import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";

import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null }; //Guardas los datos del usuario.
    this.service = new AuthService();
  }

//Coge los datos del usuario que ha usado anteriormente al logearse.
  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

//Función que cambia el estado del usuario. Te pone el usuario actual.

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    console.log("render app js")
    console.log(this.state.loggedInUser);
    console.log("")
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser} />} /> 
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            <Route exact path="/profile" render={()=> <Profile getUser={this.getTheUser} userInSession={this.state.loggedInUser} />}/>
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser} />} /> 
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            <Route exact path="/profile" render={()=> <Profile getUser={this.getTheUser} userInSession={this.state.loggedInUser} />}/>
          </Switch>
        </div>
      );
    }
      
  }
}

export default App;

//getUser: Le pasamos la función por parámetro. Se la pasamos en el prompt para poder ejecutarla.
