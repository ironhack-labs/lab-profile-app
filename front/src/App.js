import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";

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
  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
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

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
              getUser={this.getUser}
            />
            <Switch>
              <Route exact path="/" render={() => <Contents />} />
            </Switch>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
