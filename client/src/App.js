import React, { Component } from "react";
import { Switch, Route } from "react-router";

import "./App.css";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { ProfilePage } from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <Switch location={location}>
              <Route exact strict path="/" component={HomePage} key="1" />
              <Route path="/login" component={LoginPage} key="2" />
              <Route path="/signup" component={SignUpPage} key="3" />
              <Route path="/profile" component={ProfilePage} key="4" />
            </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;
