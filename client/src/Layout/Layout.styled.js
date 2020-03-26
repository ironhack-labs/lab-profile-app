import styled, { createGlobalStyle } from 'styled-components';
import background from '../../public/images/oval-bg.png';

export const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
	background: linear-gradient(to right, #c1dfc4, #deecdd) ;  
	}
`;

export const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 30em;
  width: 50%;
  margin: 6em auto;
  overflow: auto;
`;

export const Content = styled.div`
  padding: 0 3em;
  width: 37%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  h1 {
    color: #638165;
    font-size: 2.5rem;
    font-weight: 400;
  }
  p {
    font-size: 1.2rem;
    color: #57595d;
    font-weight: 300;
  }
`;
