// dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// local modules
import { Home as HomePage } from './components/Home';
import { Layout } from './Layout/Layout';
import { Signup as SignupPage } from './components/Signup';
import { Login as LoginPage } from './components/Login';
import { Profile as ProfilePage } from './components/Profile';
import { AuthContextProvider } from './contexts/authContext';
import { PrivatePage } from './helpers/withProtectedRoute';

export const App = () => {
  return (
    <Router>
      <Layout>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/:id" component={ProfilePage} /> */}
            <Route path="/:id" component={PrivatePage} />
          </Switch>
        </AuthContextProvider>
      </Layout>
    </Router>
  );
};
