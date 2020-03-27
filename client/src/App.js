import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import UserContextProvider from './contexts/userContext';

function App() {
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
