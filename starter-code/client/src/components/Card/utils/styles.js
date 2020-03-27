import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f7fff7;
`;

export const Container = styled.div`
  min-width: 60%;
  max-width: 1000;
  height: 60%;
  max-height: 600px;
  background-color: #1a535c;
  display: flex;
  border-radius: 5px;
  padding: 50px;
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.3);
`;
