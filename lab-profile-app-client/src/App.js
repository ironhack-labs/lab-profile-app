import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import authService from "./components/auth/authService";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: null,
    };
    this.service = new authService();
    this.getUser = this.getUser.bind(this);
  }

  fetchUser() {
    if (this.state.loggedUser === null) {
      this.service
        .loggedin()
        .then((response) => {
          this.setState({
            loggedUser: response,
          });
        })
        .catch((err) => {
          this.setState({
            loggedUser: false,
          });
        });
    }
  }

  getUser(user) {
    this.setState({
      loggedUser: user,
    });
  }

  render() {
    this.fetchUser();
    if (this.state.loggedUser) {
      return (
        <div className="App">
        <Navbar userInSession={this.state.loggedUser} getUser={this.getUser}/>
          <Switch>
            <ProtectedRoutes
              exact
              path="/profile"
              component={Profile}
              user={this.state.loggedUser}
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
        <Navbar userInSession={this.state.loggedUser} getUser={this.getUser}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/signup"
              render={(props) => <Signup getUser={this.getUser} {...props} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login getUser={this.getUser} {...props} />}
            />
            <ProtectedRoutes
              exact
              path="/profile"
              component={Profile}
              user={this.state.loggedUser}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
