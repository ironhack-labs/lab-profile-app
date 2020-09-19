import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '700px', height: '100%', alignItems: 'flex-start', padding: 40 }}>
            <div>
                <h1 style={{ color: 'rgb(99, 129, 101)', fontSize: '2.8rem' }}>IronProfile</h1>
                <p style={{ color: 'rgb(101, 103, 105)', fontSize: '1.4rem' }}>Today we will create an  app<br />with authorization, adding<br />some cool styles!</p>
            </div>
            <div>
                <button style={{ width: 200, height: 30, border: 'none', backgroundColor: 'rgb(192, 227, 190)' }}><Link style={{ width: '100%', height: '100%' }} to='/signup'>Sign up</Link></button>
                <br />
                <br />
                <button style={{ width: 200, height: 30, border: 'none', backgroundColor: 'rgb(192, 227, 190)' }}><Link style={{ width: '100%', height: '100%' }} to='/login'>Login</Link></button>
            </div>
        </div>
    )
}

export default Home

