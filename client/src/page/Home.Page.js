import React from "react";
import { ButtonItem } from "../component/Button";

export const HomePage = () => {
  return (
    <>
      <h1>IronProfile</h1>
      <p>Welcome to the LAB Profile HomePage</p>
      <div className="buttons-box">
        <ButtonItem whereTo="/signup">Regístrate</ButtonItem>
        <ButtonItem whereTo="/login">Iniciar Sesión</ButtonItem>
      </div>
    </>
  );
};
