import React, { Component } from 'react'

import { Link } from 'react-router-dom';


export default class Homepage extends Component {
  render() {
    return (
      <div>
       <Link to="/signup"><h1> <button class = "button">Sign Up</button></h1></Link>
         <Link to="/login"><h1><button class = "button">Login</button></h1></Link>
     
     
       
      </div>
    )
  }
}
