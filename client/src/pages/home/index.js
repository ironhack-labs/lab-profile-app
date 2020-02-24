import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <>
        <h1>Home</h1>
        <ul>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
        </ul>
    </>
)

export default Home