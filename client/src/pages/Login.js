import React from "react";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => (
  <div className="section">
    <div className="container">
      <div className="columns is-mobile box">
        <div className="column is-three-fifths">
          <p className="title">Login</p>
          <LoginForm />
        </div>

        <div className="column">
          <p className="subtitle">Hello!</p>
        </div>
      </div>
    </div>
  </div>
);
