import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
         <div className='card'>
            <h1>IronProfile</h1>
            <p>Create your profile or log in!</p>
            <button><Link to='/signup'>Sign up</Link> </button>
            <button><Link to='/login'>Log in</Link> </button>
         </div>
        )
    }
}
