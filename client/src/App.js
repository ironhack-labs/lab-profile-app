import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

//pages
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
// import AuthService from "./components/auth-service";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.user
    };
    // this.service = new AuthService();
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
          <Route
            exact
            path="/"
            render={() => {
              if (this.state.loggedInUser === null) {
                return <Home />;
              }
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              if (this.state.loggedInUser) {
                return <Redirect to="/profile"></Redirect>;
              } else {
                return <Login getUser={this.getTheUser} />;
              }
            }}
          ></Route>
          <Route
            exact
            path="/signup"
            render={() => {
              if (this.state.loggedInUser) {
                return <Redirect to="/profile"></Redirect>;
              } else {
                return (
                  <Signup
                    history={this.props.history}
                    getUser={this.getTheUser}
                  />
                );
              }
            }}
          ></Route>
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                getUser={this.getTheUser}
                userData={this.state.loggedInUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
