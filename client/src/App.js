import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/ui/theme";
import { Section } from "./components/ui/styled";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import { withAuthentication } from "./lib/withAuthentication";
import { useUser } from "./lib/authService";

const App = withAuthentication(() => {
  const user = useUser();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Section>
          {user && <h1>Welcome {user.username}</h1>}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Section>
      </ThemeProvider>
    </div>
  );
});

export default App;
