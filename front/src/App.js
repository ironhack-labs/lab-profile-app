import React from "react";
import { Switch, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { HomePage } from "./pages/HomePage";
import { withAuthentication } from "../lib/withAuthentication";

export const App = withAuthentication(() => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </>
  );
});
