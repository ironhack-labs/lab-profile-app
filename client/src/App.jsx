import React, { Component, Fragment } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/Home";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";

import LoginView from "./views/LogIn";
import SignupView from "./views/SignUp";
import ProfileView from "./views/Profile";

import Navbar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  verify as verifyService,
  signOut as signOutService
} from "./services/authentication-api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signOut = this.signOut.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    verifyService()
      .then(user => {
        if (user) {
          this.setState({
            user
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  signOut(event) {
    event.preventDefault();
    signOutService()
      .then(() => {
        this.setState({
          user: null
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  loadUser(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar signOut={this.signOut} user={this.state.user} />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route
              path="/login"
              exact
              render={props => (
                <LoginView {...props} loadUser={this.loadUser} />
              )}
            />
            <Route
              path="/signup"
              exact
              render={props => (
                <SignupView {...props} loadUser={this.loadUser} />
              )}
            />
            <Route
              path="/profile"
              exact
              render={props => (
                <ProfileView {...props} user={this.state.user} />
              )}
            />
            <Route path="/error/:code" component={ErrorView} />
            <Route path="/" component={CatchAllView} />
          </Switch>
        </Router>
      </div>
    );
  }
}
