import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="gral-container-wrapper">
            <div className="gral-container">
                <h1>IronProfile</h1>
                <p>Today we will an app with authoritation, adding some cool styles!</p>
                <div className="button-wrapper">
                    <Link to="/signup">
                        <button>Sign up</button>
                    </Link>
                    <Link to="/login">
                        <button>Log in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
