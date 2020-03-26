// dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home.component';
import { Layout } from './Layout/Layout.component';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route to="/" exact component={Home} />
          <Route to="/signup" />
          <Route to="/login" />
        </Switch>
      </Layout>
    </Router>
  );
};
