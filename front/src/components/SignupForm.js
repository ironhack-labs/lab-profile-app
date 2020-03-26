import React, { useState } from "react";

export const SignupForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [campus, setCampus] = useState("");
  const [course, setCourse] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(username, password, campus, course);
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
        <label>Campus</label>
        <input
          type="text"
          value={campus}
          onChange={e => setCampus(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Course</label>
        <input
          type="text"
          value={course}
          onChange={e => setCourse(e.target.value)}
        ></input>
      </div>
      <button type="submit">Create the Account</button>
    </form>
  );
};
