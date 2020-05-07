import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AuthService from "./components/authService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  fetchUser() {
    // console.log("inside fetchUser");
    if (this.state.loggedInUser === null) {
      // console.log("NULL inside fetchUser");
      this.service
        .loggedin()
        .then((response) => {
          // console.log("SUCCESS inside fetchUser");

          this.setState({
            loggedInUser: response,
          });
        })
        .catch((err) => {
          // console.log("ERROR inside fetchUser");

          this.setState({
            loggedInUser: false,
          });
        });
    }
  }


  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj,
    });
  }

  handleLogout() {
    this.service
      .logout()
      .then(() => { 
        console.log(this.history)
        this.setState({
          loggedInUser: null,
        });
        // this.props.history.push("/login");
        
      })
      .catch();
  }

  render() {
    this.fetchUser()
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={(props) => <Login getUser={this.getTheUser} {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup getUser={this.getTheUser} {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile user={this.state.loggedInUser} logout={this.handleLogout} {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
