import React from "react";
import { doSignup, useUserSetter } from "../../lib/authService";
import { withRouter } from "react-router-dom";
import { SignupForm } from "../components/SignupForm";

export const Signup = withRouter(({ history }) => {
  const setUser = useUserSetter();
  console.log(setUser);

  const handleSubmit = async (username, password, campus, course) => {
    const user = await doSignup(username, password, campus, course);
    console.log(user);
    setUser(user);
    // Redirige el router a la HOME
    history.push("/profile");
  };

  return (
    <>
      <h1>Sign up</h1>
      <SignupForm handleSubmit={handleSubmit} />
      <div>
        <h2>
          <b>Hello!!</b>
        </h2>
        <h2>Welcome to IronProfile!</h2>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data!
        </p>
      </div>
    </>
  );
});
