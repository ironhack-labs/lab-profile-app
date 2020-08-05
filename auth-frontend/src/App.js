import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: {
        _id: null,
      },
    };
  }

  getTheUser = (userObj) => {
    this.setState({ loggedInUser: userObj });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup {...props} getTheUser={this.getTheUser} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} getTheUser={this.getTheUser} />}
        />
        <Route
          exact
          path="/profile"
          render={(props) => (
            <Profile
              {...props}
              user={this.state.loggedInUser}
              getTheUser={this.getTheUser}
            />
          )}
        />
        <Route
          exact
          path="/logout"
          render={(props) => <Logout {...props} getTheUser={this.getTheUser} />}
        />
      </Switch>
    );
  }
}

export default App;
