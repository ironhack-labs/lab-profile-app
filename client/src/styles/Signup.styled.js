import styled from 'styled-components';
import { Content } from './Layout.styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 1em 0 0.3em;
    font-size: 1rem;
  }
  input {
    color: #172c66;
    font-size: 1rem;
    padding: 0.5em 1em;
    border: none;
    outline: none;
    background-color: #e6e6e6;
    &:focus {
      box-shadow: 0 0 0.3em 0.2em #deecdd;
    }
  }
`;

export const SocialContent = styled(Content)`
  justify-content: space-around;
  padding: 0 1em;

  div.header {
    padding: 0 2em;
    p:first-of-type {
      font-weight: 400;
      color: #000;
    }
    p {
      margin: 0;
    }
  }
  div.footer {
    padding: 0 2em;
    p {
      font-size: 0.9rem;
      padding-bottom: 1em;
    }
    button {
      width: 100%;
      border: 0.1em solid #deecdd;
      padding: 0.5em 1em;
      cursor: pointer;
      outline: none;
      font-weight: 700;
      border-radius: 0.5em;
      font-size: 0.9rem;

      &:hover {
        background-color: #deecdd;
      }
      &:focus {
        box-shadow: 0 0 0.3em 0.2em #deecdd;
      }
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  div:first-of-type {
    padding-top: 3em;
  }
`;
