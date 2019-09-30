import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>
        <div>
          <h1>IronProfile</h1>
          <p>Today we will create an app with authoritation, adding some cool styles!</p>
          <div>
            <Link to="/signup">Sign up</Link>
            <Link to="Login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home