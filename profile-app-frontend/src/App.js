import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route exact path="/signup" />
        <Route exact path="/login" />
      </Switch>
    </div>
  );
}

export default App;
