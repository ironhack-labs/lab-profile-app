import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from './components/Profile';
import AuthService from './services/authService';


class App extends React.Component {

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
    .catch(err => console.log(err))
  }

  getTheUser = user => {
    this.setState({
      loggedInUser: user
    })
  }

  render(){
    return (
      <div className='App' >
        
  
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route exact path='/signup' component={Signup} /> */}
          {/* <Route exact path='/login'  component={Login} /> */}
          <Route exact path='/signup' render={() => <Signup getTheUser={this.getTheUser} /> } />
          <Route exact path='/login' render={() => <Login getTheUser={this.getTheUser} />} />
          <Route exact path='/profile' render={() => <Profile getTheUser={this.getTheUser} loggedInUser={this.state.loggedInUser}/>} />
          </Switch>
      </div>
    );

  }

}

export default App;
