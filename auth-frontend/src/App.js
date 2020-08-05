import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
    </Switch>
  );
}

export default App;
