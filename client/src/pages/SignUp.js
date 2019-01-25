import React from "react";
import { SignupForm } from "../components/SignupForm";

export const SignUpPage = () => (
  <div className="section">
    <div className="container">
      <div className="columns is-mobile box">
        <div className="column is-three-fifths">
          <p className="title">SignUp</p>
          <SignupForm />
        </div>

        <div className="column">
          <p className="subtitle">Hello!</p>
        </div>
      </div>
    </div>
  </div>
);
