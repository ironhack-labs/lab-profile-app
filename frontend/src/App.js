import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container/Container';
import AuthService from './components/AuthService';
import { UserContext } from './UserContext';

import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const service = new AuthService()

const App = () => {

  let [ user, setUser ] = useState(null);

  useEffect(() => {
    if (user === null) {
      service
        .loggedin()
        .then(user => setUser(user))
        .catch(error => setUser(false))
    }
  }, [ user ])

  return (
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <UserContext.Provider value={{user, setUser}}>
              <Route 
                exact path="/login" 
                render={(props) => 
                  <Login {...props}/>}    
              />
              <Route 
                exact path="/signup" 
                render={(props) => 
                  <Signup {...props}/>}    
              />
              <ProtectedRoute 
                user={user}
                exact path="/profile"
                component={Profile}
              />
            </UserContext.Provider>
          </Switch>
        </Container>
      </div>
    );
  }

export default App;

