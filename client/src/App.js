import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//pages
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: null
    };
  }

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

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => <Login getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getTheUser} />}
          />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
