import React, { useContext } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { Col2 } from "../../public/styles/Common.styles";
import { InputBox } from "../components/Input/index";
import { doSignup } from "../services/authServices";
import { ApiContext } from "../context/Context";

export const SignUpPage = withRouter(({ history }) => {
  const { user, setUser } = useContext(ApiContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
      campus: "Madrid",
      course: "WebDev"
    }
  });

  const { register, handleSubmit, errors } = methods;

  const onSubmit = async data => {
    console.log("data", data);

    const responseServer = await doSignup(data);

    if (responseServer.status) {
      return history.push("/login");
    }

    setUser(data);
    history.push("/profile");
  };

  console.log("error", errors);

  return (
    <FormContext {...methods}>
      <Col2 onSubmit={handleSubmit(onSubmit)}>
        <div className="left">
          <h1>Registro</h1>
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
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                message: "Debe ser más"
              }
            })}
          />
          <div className="box-input">
            <label>Ciudad del Campus</label>
            <select name="campus" ref={register({ required: true })}>
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Miami">Miami</option>
              <option value="Paris">Paris</option>
              <option value="Berlin">Berlin</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="México">México</option>
              <option value="Sao Paulo">Sao Paulo</option>
              <option value="Lisbon">Lisbon</option>
            </select>
          </div>

          <div className="box-input">
            <label>Curso</label>
            <select name="course" ref={register({ required: true })}>
              <option value="WebDev">WebDev</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
          </div>
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
            Crea tu cuenta
          </button>
        </div>
      </Col2>
    </FormContext>
  );
});
