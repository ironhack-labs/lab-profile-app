// dependencies
import React from 'react';

// styled components
import { StyledLink, LinksContainer, HomeContent } from '../styles/Home.styled';

const Home = () => {
  return (
    <HomeContent>
      <div>
        <h1>IronProfile</h1>
        <p>
          It doesn't work and I don't know why. Damn lab...
        </p>
      </div>
      <LinksContainer>
        <StyledLink to="/auth/signup">Sign up</StyledLink>
        <StyledLink to="/auth/login">Login</StyledLink>
      </LinksContainer>
    </HomeContent>
  );
};

export default Home;