import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home';
import SignUp from './routes/signup'
import LogIn from './routes/login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
