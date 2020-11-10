import React from 'react'
import AuthService from './authService/authService'
import { Link, Redirect, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home'
import Signup from './components/signup'
import Login from './components/login'
import Profile from './components/profile'


class App extends React.Component{

  state = {
    loggedInUser: null
  }

  service = new AuthService()

  componentDidMount(){
    this.service.loggedin()

    .then(user => {
      this.setState({
       loggedInUser: user
      })
    })

    .catch(err => {
      console.log(err)
    })
   }
  
   getTheUser = user => {
    this.setState({
     loggedInUser: user
    })
  }
  
  render(){

    console.log(this.state.loggedInUser)

  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
      {/* <Route exact path='/profile' component={Profile} render={() => <Login getTheUser={this.getTheUser}} /> */} 
      <Route
            exact
            path="/profile"
            render={() => <Profile loggedInUser={this.state.loggedInUser} />}
          />
    </div>
  );

}
}

export default App;
