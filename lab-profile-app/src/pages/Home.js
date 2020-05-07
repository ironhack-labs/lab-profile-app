import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="home">
            <div className="home-div">
            <div className="home-div-content">
            <h2>IronProfile</h2>
            <p>Today we will create an app with authoritation, addin some cool styles!</p>
            <Link  to='/signup'><button className="btn">Signup</button> </Link>
            <Link  to='/login'><button className="btn">Login</button> </Link>
            </div>
            </div>
            </div>
        )
    }
}
