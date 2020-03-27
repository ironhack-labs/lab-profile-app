import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(username, password);
      }}
    >
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <p>
          If you don't have an account yet, you can create your account{" "}
          <Link to={"/signup"}>here</Link>
        </p>
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};
