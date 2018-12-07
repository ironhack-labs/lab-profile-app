import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ButtonSignup from './Components/ButtonSignup/ButtonSignup';
import ButtonLogin from './Components/ButtonLogin/ButtonLogin';



class App extends Component {
  render() {
    return (
      <div className="App">




 <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/signup" component={ButtonSignup}/>
          <Route exact path="/login" component={ButtonLogin}/>
          

        
        </Switch>

      
      </div>
    );
  }
}

export default App;
