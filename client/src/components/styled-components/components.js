import styled from "styled-components";

//home

export const StyledHome = styled.div`
    width:80%;
    background-color: coral;
`;

export const StyledSignupForm = styled.form`
    input {
    border: 1px solid gray;
    border-radius: 12px;
    width: 40%;
  }
  button {
    width: 30%;
  }
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  align-content: center;

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


  

   `
   

