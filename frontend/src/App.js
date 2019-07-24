import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home';
import SignUp from './routes/signup'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component {Home}/>
        <Route exact path='/signup' component {SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
