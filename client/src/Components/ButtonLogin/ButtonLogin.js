import React, { Component } from 'react'
import './ButtonLogin.css'
import { Link } from 'react-router-dom';

export default class ButtonLogin extends Component {
  render() {
    return (
      <div >
       <button class="class-login"><Link to='/login'>Log in</Link></button>
      </div>
    )
  }
}
