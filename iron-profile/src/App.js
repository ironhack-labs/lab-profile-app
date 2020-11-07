import React from 'react'
import AuthService from './authService/authService'
import { Link, Redirect, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home'
import Signup from './components/signup'

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

  return (
    <div className="App">
      <Home />
      <Route exact path='/signup' component={Signup} />
    </div>
  );

}
}

export default App;
