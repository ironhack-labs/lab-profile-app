import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '@styled-icons/typicons';
import { Button } from './Signup.styled';

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

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    align-self: center;
    padding-top: 3.1em;
    color: #57595d;
    cursor: pointer;

    &:hover {
      color: #638165;
    }
  }
`;

export const UploadButton = styled(Button)`
  cursor: ${props => (props.isEditing ? 'pointer' : 'not-allowed')};
  margin-top: 2em;
`;

export const EditImage = styled(Image)`
  color: #57595d;
  &:hover {
    color: #638165;
  }
`;
