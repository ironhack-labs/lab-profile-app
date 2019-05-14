import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';

import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <Router>
      <main class="centered-container">
        <Route exact path="/" component={Home} />
      </main>
    </Router>
  );
}

export default App;
