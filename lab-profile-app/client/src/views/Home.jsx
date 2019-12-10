import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="iron-profile">
      <h1>IronProfile</h1>
      <p>Today we will create an app with authentication</p>

      <Link to="/signup" className="btn">Sign Up</Link>
      <Link to="/login" className="btn">Log In</Link>
      
      {/* <a href="/auth/signup" className="btn">Sign Up</a>
      <a href="/auth/login" className="btn">Log In</a> */}
    </div>
  )
}
