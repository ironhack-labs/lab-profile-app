import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import LayoutApp from './components/LayoutApp';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ButtonsHome from './pages/ButtonsHome';
import './Router.css';
import { Button } from 'antd';
import { Divider } from 'antd';

// const Login = () => <h1>Login</h1>
// const Signup = () => <h1>Signup</h1>
// const Profile = () => <h1>Profile</h1>

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Switch>
        // cómo oculto este conmponente, asumo que cambiando el estado
        <ButtonsHome />
      </LayoutApp>
    </BrowserRouter>
  );
};

export default Router;
