import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "../buttons/Index";
import Buttons from "../buttons/Style";

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
            {/* <Route exact path="/" component={() => <LinksBeers />} />*/}
            <Route path="/signup" />
            <Route path="/login" />
            {/*<Route path="/beer-detail/:id" component={BeerDetail} />*/}
          </Switch>
        </Router>
        <Button />
      </Buttons>
    </>
  );
};

export default Home;
