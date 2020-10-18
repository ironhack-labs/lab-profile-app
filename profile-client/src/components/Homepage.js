import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <div>
            <Link to={'/signup'} className="btn">Sign up</Link><br /><br />
            <Link to={'/login'} className="btn">Log in</Link>
        </div>
    )
}
