import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return(
    <>
        <Link to="/auth/login">LOGIN</Link><br/>
        <Link to="/auth/signup">SIGNUP</Link>
    </>
    )
}

export default Home;