import React from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "../redux/user/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
