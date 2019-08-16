  
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  constructor (){
    super()
    this.state = {}
  }

  render () {
    return (
      <div className="container">
          <h1>Iron Profile</h1>

              <Link className="link" to="/signup">Sign up</Link>
 

              <Link className="link" to="/login">Log in</Link>


      </div>
    )
  }
}

export default Home