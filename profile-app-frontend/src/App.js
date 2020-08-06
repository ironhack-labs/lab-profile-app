import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
