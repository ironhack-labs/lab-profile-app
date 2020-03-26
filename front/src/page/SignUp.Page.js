import React from "react";
import { useForm, FormContext } from "react-hook-form";
import { Col2 } from "../../public/styles/Common.styles";
import { InputBox } from "../components/Input/index";

export const SignUpPage = () => {
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      campos: "",
      course: "",
      image: ""
    }
  });

  const { register, handleSubmit, errors } = methods;

  const onSubmit = data => {
    console.log("Data is");
    console.log(data);
  };

  return (
    <FormContext {...methods}>
      <Col2 onSubmit={handleSubmit(onSubmit)}>
        <div className="left">
          <h1>Registro</h1>
          <InputBox
            label="Usuario"
            name="username"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Este email no es valido"
              }
            })}
          />
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
