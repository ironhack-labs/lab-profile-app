import React from "react";
import { Link } from "react-router-dom";
import { Col2 } from "../../public/styles/Common.styles";

export const LoginPage = () => {
  return (
    <Col2>
      <div className="left">
        <h1>Iniciar Sesión</h1>

        <p>
          Si aun no tienes cuenta, puedes crear tu cuenta{" "}
          <Link to="/signup">aquí.</Link>
        </p>
      </div>
      <div className="right">
        <h2>
          ¡Hola! <span>Bienvenido a tu IronPerfil</span>
        </h2>
        <p>
          Si realizas el registro, estás aceptando los términos y condiciones
          donde nosotros podemos hacer lo que queramos con sus datos.
        </p>
        <button className="button">Inciar Sesión</button>
      </div>
    </Col2>
  );
};
