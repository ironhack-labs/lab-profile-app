import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Profile from './components/Profile';
import ProtectedRoute from './auth/protected-route';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null 
    };
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
    this.setState({
      loggedInUser: userObj
    }, () => {
      localStorage.setItem('loggedInUser', JSON.stringify(this.state.loggedInUser))
    })
  }

  render() {
      return (
        <div className="App">
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path='/signup' render={(props) => <Signup {...props}  getUser={this.getTheUser}/>}/>
            <Route exact path='/login' render={(props) => <Login {...props}  getUser={this.getTheUser}/>}/>
            <Route exact path="/logout" render={(props) => <Logout {...props} callback={this.getTheUser} />} />
            <ProtectedRoute 
              path="/profile" 
              user={this.state.loggedInUser}
              component={Profile}
            />
          </Switch>
        </div>
      )
  }
}
 
export default App;
