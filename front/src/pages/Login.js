import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <h1>Sign up</h1>
      <form>
        <div>
          <label>Username</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <p>
            If you don't have an account yet, you can create your account{" "}
            <Link to={"/signup"}>here</Link>
          </p>
        </div>
      </form>
      <div>
        <h2>
          <b>Hello!!</b>
        </h2>
        <h2>Awesome to have at ironProfile again!</h2>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data!
        </p>
        <button>Log in</button>
      </div>
    </>
  );
};
