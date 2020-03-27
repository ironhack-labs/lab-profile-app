import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper } from './utils/styles';

export const Card = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
