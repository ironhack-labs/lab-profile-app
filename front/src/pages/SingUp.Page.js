import React from "react";
import { doSignup, useUserSetter } from "../../lib/auth.api";
import { withRouter } from "react-router-dom";
import { MyForm } from "../components/MyForm";

// withRouter is a HighOrderComponent (HOC)
export const SignUpPage = withRouter(({ history }) => {
  const setUser = useUserSetter();

  const handleSubmit = async (username, password, campus, course) => {
    const user = await doSignup(username, password, campus, course);
    setUser(user);
    // Redirige el router a la HOME
    history.push("/");
  };

  return (
    <div>
      <h2>SignUp</h2>
      {/* <MyForm handleSubmit={handleSubmit} /> */}
      <MyForm {...{ handleSubmit }} />
    </div>
  );
});
