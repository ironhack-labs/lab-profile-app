import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import ProtectedRoute from './auth/protected-route';

function App() {
  const [user, setUser] = useState(null);

  const getUser = (_user) => {
    setUser(_user);
  };
  return (
    <div className="home">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup {...props} getUser={getUser} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} getUser={getUser} />}
        />
        <ProtectedRoute user={user} path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
