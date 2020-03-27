import React, { useContext } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";
import { Col2 } from "../components/Styles";
import { InputBox } from "../components/Styles";
import { login } from "../../lib/authApi";
import { UserContext } from "../components/context/Context";

export const LoginPage = withRouter(({ history }) => {
  const { user, setUser } = useContext(UserContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const { register, handleSubmit, errors } = methods;

  const onLogin = async data => {
    await login(data);
    setUser(data);
    history.push("/profile");
  };
  return (
    <FormContext {...methods}>
      <Col2 onSubmit={handleSubmit(onLogin)}>
        <div className="left">
          <h1>Iniciar Sesión</h1>
          <InputBox
            label="Usuario"
            name="username"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Este email no es valido"
              }
            })}
          />
          <InputBox
            label="Contraseña"
            type="password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />
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
          <button type="submit" className="button">
            Inciar Sesión
          </button>
        </div>
      </Col2>
    </FormContext>
  );
});
