import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "../buttons/Index";
import Buttons from "../buttons/Style";
import Signup from "./Signup";
import Login from "./Login";
import Index from "../buttons/Index";

const Home = () => {
  return (
    <>
      <Buttons>
        <h2>IronProfile</h2>
        <h4>
          Today we will create an app width authoritation, adding some cool
          styles!
        </h4>

        <Router>
          <Switch>
            <Route exact path="/" component={() => <Button />} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/*<Route path="/beer-detail/:id" component={BeerDetail} />*/}
          </Switch>
        </Router>
      </Buttons>
    </>
  );
};

export default Home;
