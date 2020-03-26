// dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import { Layout } from './Layout/Layout.component';
import { Signup } from './components/Signup/Signup.component';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" />
        </Switch>
      </Layout>
    </Router>
  );
};
