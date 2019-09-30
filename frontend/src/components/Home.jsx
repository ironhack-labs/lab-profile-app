import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
  <div className="container bg">
      
      <div className="container">
      <div className="jumbotron">
  <h1 className="display-4">Welcome to IronProfile</h1>
</div>
        </div>
      <div>
        <Link to="/signup" >
          Sign up
        </Link>
        <br />
        <Link to="/login" >
          Log in
        </Link>
      </div>
      </div>
  )
}

export default Home;