import React from "react";
import { AuthForm, Btn, XYCentered } from "./../ui/styled";

const Home = () => {
  return (
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
  );
};

export default Home;
