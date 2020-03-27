import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthForm = styled.div`
  width: 717px;
  height: 458px;
  background-image: url("./images/oval-bg.png");
  padding: 40px;
  box-sizing: border-box;
  color: #333;
  display: flex;

  .wrapper {
    width: 50%;

    &.right {
      padding-left: 10%;
      box-sizing: border-box;
    }
  }

  h1 {
    color: ${props => props.theme.green};
  }

  p {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  input,
  select {
    padding: 5px;
    display: block;
    margin-top: 5px;
  }
`;

export const Section = styled.div`
  background: ${props => props.theme.background};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled(Link)`
  background-color: ${props => props.theme.lightgreen};
  color: ${props => props.theme.green};
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.5em;
  min-width: 50%;
  margin: 5px;
  text-align: center;
  text-decoration: none;
`;

export const XYCentered = styled.div`
  margin-top: ${props => (props.mt ? "50px" : "5px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
