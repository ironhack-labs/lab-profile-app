import React, { Component, Fragment } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/Home";
// import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import ProfileView from "./views/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.loadUser = this.loadUser.bind(this);
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
          <Switch>
            <Route path="/" exact component={HomeView} />
            {/* <Route path="/login" component={Login} /> */}

            <Route path="/signup" exact component={SignUp} />
            {/* <Route
              path="/signup"
              render={props => (
                <SignUp {...props} exact loadUser={this.loadUser} />
              )}
            /> */}
            <Route
              path="/login"
              render={props => (
                <Login {...props} exact loadUser={this.loadUser} />
              )}
            />
            <Route path="/profile" exact component={ProfileView} />
            {/* <Route path="/" component={CatchAllView} /> */}
            {/* <Route path="/error/:code" component={ErrorView} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
