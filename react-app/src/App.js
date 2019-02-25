import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Signup from './components/auth/Signup';

import { Switch, Route } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
