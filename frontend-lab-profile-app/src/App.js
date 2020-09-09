import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  const [loggedUser, setLoggedUser] = useState(null)
  const getUser = userObject => {
    setLoggedUser(userObject)
  }
  return (
    <div className='App d-flex flex-row justify-content-center align-items-center'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/signup" render={(props) => <Signup {...props} getUser={getUser} />} />
        <Route path="/login" render={(props) => <Login {...props} getUser={getUser} />} />
        <Route path="/profile" render={(props) => <Profile {...props} getUser={getUser} user={loggedUser} />} />
      </Switch>
    </div>
  );
}

export default App;
