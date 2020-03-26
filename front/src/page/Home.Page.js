import React from "react";
import { ButtonItem } from "../components/Button/index";

export const HomePage = () => {
  return (
    <>
      <h1>IronProfile</h1>
      <p>
        Bienvenidos a la App donde puedes logearte y deslogerarte.{" "}
        <strong>A lo loco!!!!</strong>
      </p>
      <div className="buttons-box">
        <ButtonItem whereTo="/signup">Regístrate</ButtonItem>
        <ButtonItem whereTo="/login">Iniciar Sesión</ButtonItem>
      </div>
    </>
  );
};
