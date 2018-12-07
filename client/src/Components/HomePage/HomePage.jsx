import React, { Component } from 'react'
import Button from "../Button/Button"
import { Link } from 'react-router-dom';
import "./HomePage.css"

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Iron Profile</h1>
          <p>
            Bienvenidoooooo!!!!
          </p>
        </div>
        <div>
          <Link to="/login"><Button>Login</Button></Link>
          <Link to="/signup"><Button>Signup</Button></Link>
        </div>
      </React.Fragment>
    )
  }
}
