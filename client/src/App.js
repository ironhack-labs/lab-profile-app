import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home"
import SignUp from "./components/auth/SignUp/SignUp"
import LogIn from "./components/auth/LogIn/LogIn"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
