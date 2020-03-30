import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile'
import AuthContextProvider from './context/authContext'
import Layout from './components/UI/Layout'

function App() {
  return (
    <Layout>
    <AuthContextProvider>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/auth/signup' component={Signup}/>
      <Route exact path='/auth/login' component={Login}/>
      <Route exact path='/profile' component={Profile}/>
    </Switch>
    </AuthContextProvider>
    </Layout>
  );
}

export default App;
