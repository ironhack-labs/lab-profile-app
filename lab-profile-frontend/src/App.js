import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="layout">
            <div>
              <h1>IronProfile</h1>
              <p>
                Today we will create an app with authorization, adding some cool
                styles!
              </p>
            </div>
            <div>
              <Link to="/signup" className="link">
                Sign up
              </Link>
              <Link to="/login" className="link">
                Log in
              </Link>
            </div>
          </div>
        </Route>
        <Route exact path="/signup" />
        <Route exact path="/login" />
      </Switch>
    </div>
  );
}

export default App;
