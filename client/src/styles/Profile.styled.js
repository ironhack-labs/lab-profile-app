import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContent = styled.div`
  p {
    margin: 0 0 0.2em;
  }
  div {
    margin-top: 2em;
  }
  p:first-of-type {
    font-size: 1rem;
  }
  p:last-of-type {
    font-weight: 400;
    color: #000;
  }
  div:last-of-type {
    margin-top: 5em;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: contain;
    width: 50%;
    border-radius: 50%;
    margin-bottom: 2em;
  }
  button {
    width: 50%;
  }
`;

export const LogoutLink = styled(Link)`
  color: red;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
`;
