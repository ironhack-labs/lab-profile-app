import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

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