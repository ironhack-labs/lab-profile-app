import React from "react";
import { Container, Content } from "../public/styles/Common.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./page/Home.Page";
import { SignUpPage } from "./page/SignUp.page";

export const App = () => {
  return (
    <Router>
      <Container>
        <Content>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUpPage} />
          </Switch>
        </Content>
      </Container>
    </Router>
  );
};
