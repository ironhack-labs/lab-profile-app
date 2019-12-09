import React from 'react';
import { StyledHome } from '../styled-components/components';
import { Link } from  'react-router-dom';


export default function Home() {
    return(
        <StyledHome>
            <div className="encabezado">
                <h1>IronProfile</h1>
                <p>Today we will create an app with authorization, adding            
                some cool styles!
                </p>
            </div>
            

            <div className= "botones">
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
            </div>
            
            

        </StyledHome>
    )
}