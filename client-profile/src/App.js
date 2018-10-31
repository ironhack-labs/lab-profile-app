import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './components/homepage'
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Profile from './components/auth/profile'
import AuthService from './components/auth/auth';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null, redirect: 500 }
    this.service = new AuthService();

  }

  getTheUser = (userObj) => {
    if (userObj.status === 200) {
      this.setState({
        loggedInUser: userObj.data,
        redirect: 200
      }, () => console.log(this.state))
    }
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response.data
          })
        })
        .catch(err => {
          this.setState({ loggedInUser: false })
        })
    }
  }

  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/login' render={() =>
              (this.state.redirect === 200 ? (
                <Redirect push to={`/profile/${this.state.loggedInUser._id}`} />
              ) : (
                  <Login getUser={this.getTheUser}
                  />)
              )} />
            <Route exact path='/signup' render={() =>
              (this.state.redirect === 200 ? (
                <Redirect push to={`/profile/${this.state.loggedInUser._id}`} />
              ) : (
                  <Signup getUser={this.getTheUser}
                  />)
              )} />
            <Route exact path='/profile/:id' render={() => <Profile profile={this.state.loggedInUser} getUser={this.getTheUser}/>} />
            
          </Switch>
        </div>

      )
    } else {
      return (
        <Route exact path='/login' component={Login} />
      )
    }
  }
}

export default App;
