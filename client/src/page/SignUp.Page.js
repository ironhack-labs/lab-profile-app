import React from "react";
import { useForm, FormContext } from "react-hook-form";
import axios from "axios";
import { Col2 } from "../../public/styles/Common.styles";
import { InputBox } from "../component/Input/index";

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

  const doSignup = async (api, username, password, campus, course) => {
    // Axios post a ruta /auth/signup en servidor
    // para crear un usuario en mongodb
    console.log(`Registrando usuario...`);
    console.log(username, password, campus, course);
    const res = await api.post("/auth/signup", {
      username,
      password,
      campus,
      course
    });
    console.log("Created User");
    console.log(res.data);
    return res.data;
  };

  const onSubmit = data => {
    console.log("Data is");
    console.log("data", data);
    const api = axios.create({
      baseURL: "http://localhost:3000",
      withCredentials: true
    });

    const { username, password, campus, course } = data;

    doSignup(api, username, password, campus, course);
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
                value: /^[A-Z0-9]/i,
                message: "Este usuario no es valido"
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
                value: /.{6,64}$/,
                message: "Necesitas un password de al menos 6 caracteres"
              }
            })}
          />
          <InputBox
            label="Ciudad campus"
            name="campus"
            ref={register({
              required: {
                value: true,
                message: "Campo requerido"
              }
            })}
          />
          <InputBox
            label="Curso realizado"
            name="course"
            ref={register({
              required: {
                value: true,
                message: "Campo requerido"
              }
            })}
          />
        </div>
        <div className="right">
          <h2>
            <span>Vamos a crear tu IronPerfil</span>
          </h2>
          <p>
            Si realizas el registro, estás aceptando los términos y condiciones.
            Aviso, somos peor que si Google y la NSA tuvieran un hijo espía.
          </p>
          <button type="submit" className="button">
            Crea tu cuenta
          </button>
        </div>
      </Col2>
    </FormContext>
  );
};
