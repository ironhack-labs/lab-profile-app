import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./components/context/Context";
import { HomePage } from "./pages/Home.Page";
import { SignUpPage } from "./pages/SignUp.Page";
import { LoginPage } from "./pages/Login.Page";
import { ProfilePage } from "./pages/Profile.Page";
import { Container, Content } from "./components/Styles";

export const App = () => (
  <Router>
    <UserContextProvider>
      <Container>
        <Content>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </Content>
      </Container>
    </UserContextProvider>
  </Router>
);
