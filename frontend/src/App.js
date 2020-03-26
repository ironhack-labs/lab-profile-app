import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* --- UI Framework --- */

import "bootstrap/dist/css/bootstrap.min.css";

/* --- Components --- */
import { Signup } from "./components/Signup";

import { Home } from "./pages/Home";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);
export default App;
