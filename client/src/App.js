import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Nav } from "./components/Nav";
import 'bulma/css/bulma.css';
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
  
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default  App
