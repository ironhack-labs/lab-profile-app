import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  getUser = user => {
    this.setState({ ...this.state, user });
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/login"
            render={() => <Login getUser={this.getUser} />}
          />
          <Route path="/profile"  render={() => <Profile getUser={this.getUser} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
