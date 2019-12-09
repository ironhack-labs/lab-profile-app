import styled from "styled-components";

//Home
export const StyledHome = styled.div`
  width: 70%;
  background-color: red;
`;

//Form
export const StyledSignup = styled.form`
  width: 50%;
  box-sizing: border-box;
  & input {
    box-sizing: border-box;
    width: 100%;
    margin: 2% 0;
    padding: 4% 2%;
    border-radius: 5px;
    border: none;
    background-color: lightgrey;
  }
  & label {
    display: block;
    font-weight: 200;
    margin-top: 4%;
  }
`;

export const StyledCard = styled.div`
  width: 80%;
  margin: 5% auto;
  padding: 5%;
  background-color:white;
  border-radius: 10px;
  box-sizing: border-box;
  background: url('./oval-bg.png') no-repeat;
  background-size: cover;
  & h1 {
    color: #638165;
  };
  & h3 {
    font-weight: 200;    
  }
  & h4 {
    font-weight: 200;    
  }
  .container {
    display: flex;
  }
  & .left {
    width: 50%;
    margin: 10%;
  } 
  & .right {
    width: 40%;
    margin-left: 5%;
  }
  & button {
    width: 100%;
    margin: 5% 0%;
    padding: 5% 0%;
    font-size: 1.2em;
    border: none;
    background-color: #638165;
    border-radius: 5px;
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:visited {
    color: white;
  }
`;