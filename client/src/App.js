import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { withAuthentication } from "../lib/withAthetication";

import "./App.css";

import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/auth/Login.page";
import { SignupPage } from "./pages/auth/Signup.page";
import { ProfilePage } from "./pages/user/Profile.page";

export const App = withAuthentication(() => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </Router>
));
