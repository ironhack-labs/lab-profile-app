import React from "react";
import { AuthForm } from "./../ui/styled";
import { useForm } from "react-hook-form";
import { signup } from "./../../services/authService";
import { useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
      campus: "Madrid",
      course: "WebDev"
    }
  });

  const onSubmit = data =>
    signup(data).then(res => {
      if (res.success) history.push("/");
      console.log(res);
    });

  return (
    <AuthForm>
      <div className="wrapper">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="username"
            ref={register({ required: true })}
            placeholder="Username"
          />
          {errors.username && <span>This field is required</span>}
          <input
            name="password"
            ref={register({ required: true })}
            placeholder="Password"
          />
          {errors.password && <span>This field is required</span>}
          <select name="campus" ref={register}>
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
          <select name="course" ref={register}>
            <option value="WebDev">WebDev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>
          <input type="submit" value="Create the account" />
        </form>
      </div>
      <div className="wrapper right">
        <h1>Hello!</h1>
        <p>Welcome to IronProfile!</p>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data
        </p>
      </div>
    </AuthForm>
  );
};

export default Signup;
