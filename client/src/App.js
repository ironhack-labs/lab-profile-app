import React, { Component } from "react";
import "./App.css";
import HomePage from './components/HomePage'
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
