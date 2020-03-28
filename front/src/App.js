import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

import { HomePage } from "./pages/Home.page"
import { SignupPage } from "./pages/Signup.page"
import { LoginPage } from "./pages/Login.page"
import { ProfilePage } from "./pages/Profile.page"

export const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    </Layout>
  </Router>
);