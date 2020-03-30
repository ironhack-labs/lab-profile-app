import styled, { createGlobalStyle } from 'styled-components';
import background from '../../images/oval-bg.png'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
	  background: linear-gradient(to right, #c1dfc4, #deecdd);  
	}
  p, label {
    font-size: 1.2rem;
    color: #57595d;
    font-weight: 300;
  }
  h1 {
    color: #638165;
    font-size: 2.5rem;
    font-weight: 400;
  }
`;

export const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 35em;
  width: 61%;
  margin: 6em auto;
  overflow: auto;
  p.small {
    font-size: 0.9rem;
    margin-top: 3em;
    a {
      color: #57595d;
    }
  }
`;

export const Content = styled.div`
  padding: 0 3em;
  width: 37%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;