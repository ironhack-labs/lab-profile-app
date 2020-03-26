import React from "react";
import { Container, Content } from "../public/styles/Common.styles";
import { ApiContextProvider } from "./context/Context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./page/Home.Page";
import { SignUpPage } from "./page/SignUp.Page";
import { LoginPage } from "./page/Login.Page";
import { ProfilePage } from "./page/Profile.Page";

export const App = () => (
  <BrowserRouter>
    <ApiContextProvider>
      <Container>
        <Content>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/profile" exact component={ProfilePage} />
          </Switch>
        </Content>
      </Container>
    </ApiContextProvider>
  </BrowserRouter>
);
