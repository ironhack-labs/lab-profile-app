import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
       <Link to = "/login"><button>Login</button></Link> 
       <Link to = "/signup"><button>SignUp</button></Link> 
      </div>
    )
  }
}
