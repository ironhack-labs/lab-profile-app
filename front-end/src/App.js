import React from 'react'
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';


function App() {
  return (
    <div >
      <Navbar />

      <Switch>
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login'  component={Login} />
    
  

      </Switch>
    </div>
  );
}

export default App;
