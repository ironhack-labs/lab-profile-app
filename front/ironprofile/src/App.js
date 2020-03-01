import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import AuthService from "./components/auth/AuthService";
// import Contents from "./components/contents/Contents";
import HomePage from "./Homepage/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  fetchUser() {
    return this.service
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

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
