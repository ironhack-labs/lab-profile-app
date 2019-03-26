import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from './Auth/AuthService'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null }
    this.service = new AuthService()
  }

  render(){
      return(   
        <nav className="nav-style">
          <ul className="nav-list">
            <li><Link to='/login' className="nav-element">Login</Link></li>
            <li><Link to='/signup' className="nav-element">Signup</Link></li>
          </ul>
        </nav>
    )
  }
}

export default Navbar