import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css'

const home = () => {
  return (
    <div>
        <h1>IronProfile</h1>
        <p>Today we will create an app with authoritation, adding some cool styles!</p>

        <button><Link to='/Signup'>Sign Up</Link></button>
        <button><Link to='/'>Login</Link></button>

    </div>
  )
}

export default home;