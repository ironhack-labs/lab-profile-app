import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='box d-flex flex-row'>
            <div className='box-element d-flex flex-column justify-content-around'>
                <div>
                    <h2>Iron Profile</h2>
                    <h5>Today we will create an app with authoritation, adding some cool styles!</h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <Link className='btn btn-iron-profile m-3' to='/signup'>Sign up</Link>
                    <Link className='btn btn-iron-profile m-3' to='/login'>Log in</Link>
                </div>
            </div>
            <div className='box-element'></div>
        </div>
    )
}

export default Home
