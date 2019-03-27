import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <Switch>
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
          </Switch>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App
