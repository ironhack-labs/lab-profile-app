import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => <div>start</div>;
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./components/context/Context";

export const App = () => (
  <Router>
    <UserContextProvider>
      <Container>
        <Content>
          <div>Hola</div>;
        </Content>
      </Container>
    </UserContextProvider>
  </Router>
);
