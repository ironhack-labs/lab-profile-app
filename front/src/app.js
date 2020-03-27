import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home.pages";
import { LoginPage } from "./pages/Login.Page";
import { SignUpPage } from "./pages/SignUp.Page";
import { ProfilePage } from "./pages/Profile.pages";

import { ApiContextProvider } from "../context/ApiContext";

export const App = () => (
  <Router>
    <ApiContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </ApiContextProvider>
  </Router>
);
