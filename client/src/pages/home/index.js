import './index.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div>
                <article>
                <h1>IronProfile</h1>
                <p>Today We will create an app</p>
                <p>with authoritation, adding </p>
                <p>some cool styles!</p>
                <br></br>
                <br></br>
                <Link to='/signup'><h5>Sign Up</h5></Link> 
                <br></br>
                <Link to='/login'><h5>Log in</h5></Link> 
                </article>
                </div>
            </div>
        )
    }
}
