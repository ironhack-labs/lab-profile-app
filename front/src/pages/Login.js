import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { useUserSetter, doLogin } from "../../lib/authService";

export const Login = withRouter(({ history }) => {
  const [error, setError] = useState();
  const setUser = useUserSetter();
  const handleSubmit = async (username, password) => {
    try {
      if (username == "" || password == "") {
        throw new Error("rellleeeeeeeeeeeeena");
      }
      const user = await doLogin(username, password);
      history.push("/profile");
      setUser(user);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <>
      <h1>Sign up</h1>
      <LoginForm handleSubmit={handleSubmit} />
      <div>
        <h2>
          <b>Hello!!</b>
        </h2>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <h2>Awesome to have at ironProfile again!</h2>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data!
        </p>
      </div>
    </>
  );
});
