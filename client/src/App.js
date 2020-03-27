import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  background-color: lightgreen;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthForm = styled.div`
  width: 717px;
  height: 458px;
  background-image: url("./images/oval-bg.png");
  padding: 40px;
  box-sizing: border-box;
  color: #333;

  .wrapper {
    width: 50%;

    h1 {
      color: darkgreen;
    }

    p {
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }
`;

const Btn = styled(Link)`
  background-color: lightgreen;
  color: darkgreen;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.5em;
  min-width: 50%;
  margin: 5px;
  text-align: center;
  text-decoration: none;
`;

const XYCentered = styled.div`
  margin-top: ${props => (props.mt ? "50px" : "5px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Section>
        <AuthForm>
          <div className="wrapper">
            <h1>IronProfile</h1>
            <p>
              Today we will create an app with authorization, adding some cool
              styles.
            </p>
            <XYCentered mt>
              <Btn to="signup">Sign Up</Btn>
            </XYCentered>
            <XYCentered>
              <Btn to="login">Log in</Btn>
            </XYCentered>
          </div>
        </AuthForm>
      </Section>
    </div>
  );
}

export default App;
