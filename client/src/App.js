import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./Components/HomePage/HomePage"

class App extends Component {
  render() {
    return (
      <div className="App">




        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
