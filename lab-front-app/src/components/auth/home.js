import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class home extends Component {
    render() {
        return (
            <div>
                <h1>Iron Profile</h1>
                <h2>Today we will create an app with authoritation, adding some cool styles!</h2>
                <Link to="/signup" className="btn">Sign up</Link>
                <Link to="/login" className="btn">Log in</Link>
            </div>
        )
    }
}

export default home