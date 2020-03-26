import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";

import "./App.css";

import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/auth/Login.page";
import { SignupPage } from "./pages/auth/Signup.page";
import { ProfilePage } from "./pages/user/Profile.page";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </Provider>
  );
};
