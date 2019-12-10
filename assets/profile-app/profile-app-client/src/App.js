import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/SignUp" component={SignUpForm} />
            <Route path="/LogIn" component={LogInForm} />
            <Route path="/" component={HomePage} />
            {/* <Route path="/beers" component={BeerListView} />
            <Route path="/random-beer" component={RandomBeersView} />
            <Route path="/new-beer" component={NewBeerView} />
            <Route path="/" component={HomeView} /> */}
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
