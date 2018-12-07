import React, { Component } from 'react'
import './ButtonSignUp.css'
import { Link } from 'react-router-dom';

export default class ButtonSignUp extends Component {
  render() {
    return (
      <div>
        <button className="class-signup"><Link to='/signup'>Sing up</Link></button>
      </div>
    )
  }
}
