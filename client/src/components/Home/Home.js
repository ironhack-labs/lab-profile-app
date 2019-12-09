import React from 'react';
import { Link } from "react-router-dom";
import { StyledHome, StyledCard } from '../styled-components.js/components';

export default function Home() {
  return (
    <StyledCard>
    <div class="left">
      <h1>IronProfile</h1>
      <p>Today we will create an app <br/> with authoritation, adding <br/> some cool styles! </p>
      <button ><Link to="/signup"> Sing up</Link></button>
      <button><Link to="/login">Log in</Link></button>
    </div>
    </StyledCard>
  )
};
