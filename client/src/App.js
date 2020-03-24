import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import _ from "lodash";

import "./App.css";

import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/auth/Login.page";
import { SignupPage } from "./pages/auth/Signup.page";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
};
