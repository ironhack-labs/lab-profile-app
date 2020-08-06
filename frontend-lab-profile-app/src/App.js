import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [loggedUser, setLoggedUser] = useState(null)
  const getUser = userObject => {
    setLoggedUser(userObject)
  }
  return (
    <div className='App'>
      <h1>Iron Profile</h1>
      <h2>Today we will create an app with authoritation, adding some cool styles!</h2>
      <Link className='btn' to='/signup'>Sign up</Link>
      <Link className='btn' to='/login'>Log in</Link>
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route path="/signup">
          <Signup getUser={getUser}/>
        </Route>
        <Route path="/login">
          <Login getUser={getUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
