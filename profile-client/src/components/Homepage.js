import React from 'react'
import {Link} from 'react-router-dom'

export default function Homepage() {
    return (
        <div className="outer-container">
        <div className="inner-container">
            <div className="btn-container">
                <Link to={'/signup'} className="btn">Sign up</Link>
                <Link to={'/login'} className="btn">Log in</Link>  
            </div>
        </div>
        </div>
    )
}
