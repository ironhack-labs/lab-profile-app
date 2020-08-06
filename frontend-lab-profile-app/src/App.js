import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [loggedUser, setLoggedUser] = useState(null)
  const getUser = userObject => {
    setLoggedUser(userObject)
  }
  return (
    <div className='App d-flex flex-row justify-content-center align-items-center'>
      <Switch>
        <Route exact path='/'>
          <Home />
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
