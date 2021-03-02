import React, { Component } from 'react';
import './App.css';
import home from './components/home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/auth/Profile';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div >
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/signup" render={() => <Signup getUser={this.getTheUser} />} />
          <Route path="/login" render={() => <Login getUser={this.getTheUser} />} />
          <Route path="/profile" render={(props) => <Profile getUser={this.getTheUser} {...props} />} />
        </Switch>
      </div >
    );
  }

}

export default App;