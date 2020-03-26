import React from 'react';
import { StyledLink, LinksContainer, HomeContent } from './Home.styled';

export const Home = () => {
  return (
    <HomeContent>
      <div>
        <h1>IronProfile</h1>
        <p>
          Last lab of the bootcamp! 😸 An app with authentication and
          authorization built with React
        </p>
      </div>
      <LinksContainer>
        <StyledLink to="signup">Sign up</StyledLink>
        <StyledLink to="login">Login</StyledLink>
      </LinksContainer>
    </HomeContent>
  );
};
