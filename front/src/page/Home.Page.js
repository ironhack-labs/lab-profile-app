import React, { useContext } from "react";
import { ButtonItem } from "../components/Button/index";
import { ApiContext } from "../context/Context";

export const HomePage = () => {
  const { user } = useContext(ApiContext);

  return (
    <>
      {user ? <h1>{user.username}</h1> : <h1>IronProfile</h1>}
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
