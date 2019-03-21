import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/auth/Signup.js";
import AuthService from "./components/auth/auth-service.js";
import Login from "./components/auth/Login.js";
import Profile from "./components/Profile.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, user: {} };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: true,
            user: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  //pour vérifier si le user est déjà loggé avec loginsession
  componentDidMount() {
    this.fetchUser();
  }

  //si déjà loggé récupérer la session
  getTheUser = userObj => {
    console.log("GetTheUser", userObj);
    this.setState({
      loggedInUser: true,
      user: userObj
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/signup"
            render={props => <Signup getUser={this.getTheUser} {...props} />}
          />
          <Route
            exact
            path="/"
            render={props => <Login getUser={this.getTheUser} {...props} />}
          />
          <Route
            exact
            path="/profile"
            component={Profile}
            render={props => <Profile getUser={this.getTheUser} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
