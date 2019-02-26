import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { Link, Switch, Route } from "react-router-dom";
import Service from "./component/Service";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.Service = new Service();
    this.ifLoggedIn();
  }

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  logout = () => {
    this.Service.logout().then(() =>
      this.setState({ ...this.state, user: null })
    );
  };

  ifLoggedIn = () => {
    this.Service.loggedin().then(user =>
      this.setState({ ...this.state, user })
    );
  };

  render() {
    const welcome = this.state.user ? (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    ) : (
      <div />
    );
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/auth/login"
            render={() => <Login getUser={this.getUser} />}
          />
          <Route
            exact
            path="/auth/signup"
            render={() => <Signup getUser={this.getUser} />}
          />
        </Switch>
        {welcome}
      </div>
    );
  }
}

export default App;
