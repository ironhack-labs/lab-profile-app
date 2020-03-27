import React from "react";
import { useForm, FormContext } from "react-hook-form";
import { Col2 } from "../../public/styles/Common.styles";
import { InputBox } from "../components/Input/index";
import {doSignup} from "../services/authServices";

export const SignUpPage = () => {
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
      campus: "",
      course: ""
    }
  });

  const { register, handleSubmit, errors } = methods;



  const onSubmit = async data => {
    console.log("Data is");
    console.log("data", data);

    await doSignup(data);
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
              }
              // pattern: {
              //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
              //   message: "Debe ser más"
              // }
            })}
          />
          <div className="box-input">
            <label>Nombre del Campus</label>
            <select name="campus" ref={register({ required: true })}>
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Miami">Miami</option>
              <option value="Paris">Paris</option>
              <option value="Berlin">Berlin</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="Mexico">Mexico</option>
              <option value="Sao Paulo">Sao Paulo</option>
              <option value="Lisbon">Lisbon</option>
            </select>
          </div>
          <div className="box-input">
            <label>Curso a realizar</label>
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
};
