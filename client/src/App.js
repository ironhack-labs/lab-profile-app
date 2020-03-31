import React, { useContext, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import UserContextProvider from './contexts/userContext';
import {UserContext} from './contexts/userContext';
import { loggedin } from './services/authService';

function App() {
  const {setUser} = useContext(UserContext);

  useEffect(() => {
    // When the app starts this runs only once
    console.log("Welcome to app!");

    // Try to get the current logged in user from our backend
    loggedin()
      .then(user => {
        console.error(`Welcome user ${user.username}`);
        setUser(user);
      })
      .catch(e => {
        console.error("No user logged in ");
      })
  }, []);

  return (
    <div className="App">
      <UserContextProvider>
        <Switch>
          <Route exact path='/' component={HomePage}/>  
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/signup' component={SignupPage}/>
          <Route exact path='/profile' component={ProfilePage}/>
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
