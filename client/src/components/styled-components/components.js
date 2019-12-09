import styled from "styled-components";

//home

export const StyledHome = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction:column;
    width: 40%;
    height:500px;
    /*background-color: #FFF;*/
    background-image: url('./oval-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 150px;
    padding: 0 50px;
    & h1 {
        color: #638165;
        font-weight:500;
        font-size: 50px;
    }
    & .botones {
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }

    & a {
    margin-top: 20px;
    width: 250px;
    height: 40px;
    border: 1px  #c0e3be solid;
    background-color: #c0e3be;
    border-radius: 5px;
    text-align: center;
    font-size:16px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration: none;
  }
  a:visited {
    color: #7b7b7b;
  }
    & p{
    width: 57%;
    font-size: 25px;
    margin-top: 25px;
    margin-bottom: 75px;
    line-height: 37px;
    font-weight: 300;
    }
`;

export const StyledSignupForm = styled.form`

    display: flex;
    align-items: flex-start;
    flex-direction:row;
    justify-content: space-evenly;
    width: 40%;
    height:500px;
    /*background-color: #FFF;*/
    background-image: url('./oval-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 150px;
    padding: 0 50px;

    input {
    margin-top: 10px;
    border: 1px solid #f6f6f6;
    border-radius: 5px;
    width: 80%;
    height:40px;
    background-color: #f6f6f6;
  }
  label{
    margin-top:10px;
  }
  button {
    margin-top: 20px;
    height:30px;
    width: 60%;
    border-radius: 5px;
    border: 1px solid #c0e3be;
    background-color: #c0e3be;
  }
  & div:nth-child(1) {
    
    width: 60%;

  }
  & div:nth-child(2) {
    
    width: 40%;   
}
`;
export const StyleProfile = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction:row;
    width: 40%;
    height:500px;
    /*background-color: #FFF;*/
    background-image: url('./oval-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 150px;
    padding: 0 50px;
    & h1 {
        color: #638165;
        font-weight:500;
    }
    & h2 {
      font-weight: 500;
    }
    & h4 {
      color:#a1a1a1;
      font-weight: 300;
    }
    a {
    color: red;
    text-decoration: none;
    display:flex;
    justify-content: center;
  }
  a:visited {
    color: red;
  }
  & p {
    width: 60%;
    margin-top: 50px;
    font-size: 13px;
    font-weight: 300;
    color:#a1a1a1;
  }
  & img {
    max-width:150px;
    min-width:150px;
    border-radius: 10px 10px 0px 0px;
  }
  & button {
    margin-top: 20px;
    width: 180px;
    border: 1px  #eaebe6 solid;
    background-color: #eaebe6;
    border-radius: 5px;
  }
  & div:nth-child(1) {
    
    width: 50%;
  }
  & div:nth-child(2) {
    
    width: 50%;   
}
`;

export const StyledLoginForm = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction:row;
  justify-content: space-evenly;
  width: 40%;
  height:500px;
  background-image: url('./oval-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 150px;
  padding: 0 50px;
  & div:nth-child(1) {
    
    width: 60%;

  }
  & div:nth-child(2) {
    
    width: 40%;   
  }
  input {
    margin-top: 10px;
    border: 1px solid #f6f6f6;
    border-radius: 5px;
    width: 80%;
    height:40px;
    background-color: #f6f6f6;
  }
  label{
    margin-top:10px;
  }
  button {
    margin-top: 20px;
    height:30px;
    width: 60%;
    border-radius: 5px;
    border: 1px solid #c0e3be;
    background-color: #c0e3be;
  }
`;
   

