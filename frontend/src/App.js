import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container/Container';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/AuthProvider';

const App = () => {

  return (
         
      <div className="app">
        <Container>
            <Switch>
            <AuthProvider>

              <Route exact path="/" component={HomePage} />
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
                    exact path="/profile"
                    component={Profile}
                  />
            </AuthProvider>
            </Switch>
            
        </Container>
      </div>
         
    );
  }

export default App;

