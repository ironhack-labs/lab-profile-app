import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import LayoutApp from './components/LayoutApp';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
// import Home from './pages/Home';
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
        <div className="site-button-ghost-wrapper">
          <h1>IronProfile</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
          </p>
          <Button type="primary" ghost>
            <Link to="/Signup">Sign up</Link>
          </Button>
          <Divider />

          <Button type="primary" ghost>
            <Link to="/Login">Login</Link>
          </Button>
        </div>
      </LayoutApp>
    </BrowserRouter>
  );
};

export default Router;
