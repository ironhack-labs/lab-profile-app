import React from "react"
import { Link } from "react-router-dom";

const HomePage = () => {
	return <div>
    <h1>Iron Profile</h1>
    <p>Today we will create an app with auth, adding some cool styles!</p>
    <Link to="/auth/login">Login</Link>
    <Link to="/auth/signup">Signup</Link>
    
    </div>
}

export default HomePage