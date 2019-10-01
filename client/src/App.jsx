import React, { Component, Fragment } from "react";

import "./App.css";
import logo from "./oval-bg.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import BlogNavbar from "./components/BlogNavbar";

// import ListView from "./views/List";
//import CreateView from "./views/Create";
//import PostView from "./views/Post";
// import EditView from "./views/Edit";
import SignIn from "./views/Signin";
import SignUp from "./views/Signup";
import Home from "./views/Home";
import ErrorView from "./views/Error";
import CatchAll from "./views/CatchAll";

import Container from "react-bootstrap/Container";

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
    this.verifyAuthenticated = this.verifyAuthenticated.bind(this);
    this.verifyUnauthenticated = this.verifyUnauthenticated.bind(this);
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

  verifyAuthenticated() {
    return !!this.state.user;
  }

  verifyUnauthenticated() {
    return !this.state.user;
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="Logo" />
        <div class="bk">
          <Router>
            <Container>
              <BlogNavbar user={this.state.user} signOut={this.signOut} />
              <Switch>
                {/* <img src={logo} alt="Logo" /> */}
                <Route path="/" exact component={Home} />
                {/* <ProtectedRoute
                path="/post/create"
                component={CreateView}
                verify={this.verifyAuthenticated}
              /> */}
                {/* <ProtectedRoute
                path="/post/:id/edit"
                component={EditView}
                verify={this.verifyAuthenticated}
              /> */}
                {/* asd */}
                {/* <Route path="/post/:id" exact component={PostView} /> */}
                <ProtectedRoute
                  path="/signup"
                  verify={this.verifyUnauthenticated}
                  render={props => (
                    <SignUp {...props} exact loadUser={this.loadUser} />
                  )}
                />
                <ProtectedRoute
                  path="/signin"
                  verify={this.verifyUnauthenticated}
                  render={props => (
                    <SignIn {...props} exact loadUser={this.loadUser} />
                  )}
                />
                {/* <Route path="/error/:code" component={ErrorView} />
              <Redirect path="/" to="/error/404" /> */}
              </Switch>
            </Container>
          </Router>
        </div>
      </div>
    );
  }
}
