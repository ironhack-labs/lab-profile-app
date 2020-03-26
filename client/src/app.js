import React from "react";
import { Container, Content } from "../public/styles/Common.styles";
import { ApiContextProvider } from "./context/Context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./page/Home.Page";
import { SignUpPage } from "./page/SignUp.Page";
import { LoginPage } from "./page/Login.Page";

export const App = () => (
  <BrowserRouter>
    <ApiContextProvider>
      <Container>
        <Content>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Content>
      </Container>
    </ApiContextProvider>
  </BrowserRouter>
);
