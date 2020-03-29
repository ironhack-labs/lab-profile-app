import React from "react";
import { AuthForm } from "./../ui/styled";
import { useForm } from "react-hook-form";
import { login } from "./../../services/authService";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = data => {
    login(data)
      .then(res => {
        if (res?.username) history.push("/");
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  return (
    <AuthForm>
      <div className="wrapper">
        <h1>Login</h1>
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
          <input type="submit" value="Login" />
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

export default Login;
