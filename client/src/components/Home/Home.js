import React from 'react';
import { StyledHome } from '../styled-components/components';
import { Link } from  'react-router-dom';


export default function Home() {
    return(
        <StyledHome>
            <h1>IronProfile</h1>
            <p>Tday we will create an app
            <br/>
            with authorization, adding
            <br/>
            some cool styles!
            </p>

            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>

        </StyledHome>
    )
}