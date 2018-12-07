import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <Link to='/signup'>Sign up</Link> 
        </div>
        
        <div>
        <Link to='/login'>Log in</Link>
        </div>
        
      </div>
    )
  }
}
