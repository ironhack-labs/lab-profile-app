import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 700;
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 0.2em;
  background-color: #deecdd;
  margin: 0.8em;

  &:hover {
    background-color: #c1dfc4;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
