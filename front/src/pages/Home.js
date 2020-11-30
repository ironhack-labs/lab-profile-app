import react from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>IronProfile</h1>
            <Link to='/signup'>Signup</Link>
            <br />
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Home