import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className='all'>
                <div className='left-home'>
                <h1 className='home-title'>IronProfile</h1>
                <p className='home-text'>
                    Today we will create an app with authorization, adding some cool styles! 
                </p>
                <Link to="/signup"><button className='home-btn'>Sign up</button></Link>
                <Link to="/login"><button className='home-btn'>Login</button></Link>
                </div>
            </div>
        )
    }
}

export default Homepage;
