import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApiContextProvider } from "./context/context";

/* --- UI Framework --- */

import "bootstrap/dist/css/bootstrap.min.css";

/* --- Components --- */
import { Home } from "./pages/Home";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

const App = () => (
  <Router>
    <ApiContextProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </ApiContextProvider>
  </Router>
);
export default App;
