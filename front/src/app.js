import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home.pages";
import { Login } from "./pages/Login.Page";
import { SignUpPage } from "./pages/SingUp.Page";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUpPage} />
    </Switch>
  </Router>
);
