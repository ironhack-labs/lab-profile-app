import React from 'react';
import { GlobalStyle, Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};
