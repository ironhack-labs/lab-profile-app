import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import { Link, Switch, Route } from "react-router-dom";
import Service from "./component/auth/Service";
import Navbar from "./component/navbar/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: null };
    this.Service = new Service();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.Service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      //utilizamos el método loggedin para cualquier momento que deseemos obtener la información del usuario quede guardada en el state de app
      this.Service.loggedin()
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

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div>
          <header>
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            />
            <button onClick={this.logout}>Logout</button>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header className="header">
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            />

            <Switch>
              <Route
                exact
                path="/signup"
                render={() => <Signup getUser={this.getUser} />}
              />
              <Route
                exact
                path="/login"
                render={() => <Login getUser={this.getUser} />}
              />
            </Switch>
          </header>
        </div>
      );
    }
  }
}

export default App;
