import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/content/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default Content;
