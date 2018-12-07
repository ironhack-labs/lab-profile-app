import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card'
import { Switch, Route } from 'react-router-dom';
import ButtonSignUp from './Components/ButtonSignUp/ButtonSignUp'
import ButtonLogin from './Components/ButtonLogin/ButtonLogin'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
       <Route exact path='/' component={Card}/>
          <Route path='/signup' component={ButtonSignUp}/>
          <Route path='/login' component={ButtonLogin}/>
       </Switch>
        
      </div>
    );
  }
}

export default App;
