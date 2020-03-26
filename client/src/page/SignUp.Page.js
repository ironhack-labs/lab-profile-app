import React from "react";
import { ButtonItem } from "../component/button";
import { Col2 } from "../../public/styles/Common.styles";

export const SignUpPage = () => {
  return (
    <Col2>
      <div className="left">
        <h1>Sign Up</h1>
        <label htmlFor="">Email</label>
        {/* <input
          type="email"
          id="username"
          placeholder="email@email.com"
          value=""
          onChange=""
        /> */}
      </div>
      <div className="right">
        <h2>
          ¡Hola! <span>Bienvenido a tu IronPerfil</span>
        </h2>
        <p>
          Si realizas el registro, estás aceptando los términos y condiciones
          donde nosotros podemos hacer lo que queramos con sus datos.
        </p>
        <button className="button">Crea tu cuenta</button>
      </div>
    </Col2>
  );
};
