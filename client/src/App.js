import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Homepage} />
          {/* <Route path="/login" component={Homepage} /> */}
          {/* <Route path="/signup" component={Homepage} /> */}
        </Switch>
        {/* <Homepage></Homepage> */}
      </div>
    );
  }
}

export default App;
