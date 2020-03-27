import React from "react";
import { ButtonItem } from "../components/Button";

export const HomePage = () => {
  return (
    <>
      <h1>IronProfile</h1>
      <p>
        App lab-profile-app
        <strong>A lo loco!!!!</strong>
      </p>
      <div className="buttons-box">
        <ButtonItem whereTo="/signup">Regístrate</ButtonItem>
        <ButtonItem whereTo="/login">Iniciar Sesión</ButtonItem>
      </div>
    </>
  );
};