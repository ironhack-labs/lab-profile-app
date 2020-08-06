import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>Iron Profile</h1>
      <h2>Today we will create an app with authoritation, adding some cool styles!</h2>
      <Link className='btn' to='/signup'>Sign up</Link>
      <Link className='btn' to='/login'>Log in</Link>
      <Switch>
        <Route path="/signup">
          <h1>Sign up</h1>
        </Route>
        <Route path="/login">
        <h1>Log in</h1> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
