import React, {Component} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/SignUp';
import Login from './components/Login';
import AuthService from './components/auth/auth-service';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
 
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
  }

  fetchUser(){
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component = { Homepage } />
            <Route path='/signup' component = { Signup } />
            <Route path='/login' component = { Login } />
          </Switch>
        </Router>  
      </div>
    );
  }
}

export default App
