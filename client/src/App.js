import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Route>
        <Link to='/signup'>Signup</Link>
        <br />
        <Link to='/login'>Login</Link>
      </Route>
    </div>
  );
}

export default App;
