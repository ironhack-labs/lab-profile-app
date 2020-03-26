import React from 'react';
import { GlobalStyle, Container, Content } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
};
