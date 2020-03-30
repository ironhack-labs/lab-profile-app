import React from 'react';
import { GlobalStyle, Container } from '../styles/Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;