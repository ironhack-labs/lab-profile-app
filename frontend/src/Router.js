import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import SignupContainer from './components/signup/SignupContainer';
import LoginContainer from './components/login/LoginContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import EditContainer from './components/edit/EditContainer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
      <Route exact path="/edit" component={EditContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;