import React from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import Signup from './signup'
import Login from './login'


export default function Home(){
    return (
        <div>
            <h1>IronProfile</h1>
            <Link to='/signup'>
                <button>Sign Up</button>
            </Link>
            <br></br>
            <br></br>
            <Link to='/login'>
                <button>Log In</button>
            </Link>
        </div>
    )
}
