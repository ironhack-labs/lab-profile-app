import React, { Component } from 'react'
import Button from "../Button/Button"
import { Link } from 'react-router-dom';
import "./HomePage.css"

export default class HomePage extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <h1 className="title">Iron Profile</h1>
          <p className="subtitle">
            Todau we will create an app with authoritation,
            adding some cool styles!
          </p>
        </div>
        <div class="buttons">
          <div>
            <Link to="/login"><Button>Log in</Button></Link>
          </div>
          <div>
            <Link to="/signup"><Button>Sign up</Button></Link>
          </div>
        </div>
      </div>
    )
  }
}
