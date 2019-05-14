import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <Router>
      <main className="centered-container">
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </main>
    </Router>
  );
}

export default App;
