import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Col2 } from "../../public/styles/Common.styles";
import { doLogout, doEdit } from "../services/authServices";
import { ApiContext } from "../context/Context";
import { useForm, FormContext } from "react-hook-form";
import { InputBox } from "../components/Input/index";
import imgProfile from "../../public/images/user-placeholder.png";

export const ProfilePage = withRouter(({ history }) => {
  const { user, setUser } = useContext(ApiContext);

  const onClickLogout = async e => {
    e.preventDefault();
    await doLogout();
    setUser(null);
    history.push("/");
  };

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: user?.username,
      campus: user?.campus,
      course: user?.course
    }
  });

  useEffect(() => {
    methods.reset({
      username: user?.username,
      campus: user?.campus,
      course: user?.course
    });
  }, [user]);

  console.log(user);
  const { register, handleSubmit, errors } = methods;

  const onEdit = async data => {
    console.log("data", data);
    await doEdit(data);
    setUser(data);
  };

  return (
    <FormContext {...methods}>
      <Col2 onSubmit={handleSubmit(onEdit)}>
        <div className="left">
          <h1>Profile</h1>
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
          <button type="submit" className="button">
            Editar Profile
          </button>
        </div>
        <div className="right">
          <div className="box-img">
            <img src={imgProfile} />
          </div>
          <p>Si quieres editar tus campos da al siguiente botón</p>
          <button className="button" onClick={e => onClickLogout(e)}>
            Logout
          </button>
        </div>
      </Col2>
    </FormContext>
  );
});
