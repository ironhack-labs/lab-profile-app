import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ProfilePage from './components/ProfilePage';

function App() {
  const initialState = {
    loggedInUser: null,
  };
  const [state, setState] = useState(initialState);
  const getUserData = (user) => {
    setState({ loggedInUser: user });
    console.log(user);
  };
  console.log(state.loggedInUser);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup {...props} callback={getUserData} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} callback={getUserData} />}
        />
        <Route
          exact
          path="/profile"
          render={(props) => (
            <ProfilePage {...props} user={state.loggedInUser} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
