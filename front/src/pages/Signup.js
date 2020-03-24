import React, { useState, useEffect } from "react";

export const Signup = () => {
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
          <label>Campus</label>
          <input></input>
        </div>
        <div>
          <label>Course</label>
          <input></input>
        </div>
      </form>
      <div>
        <h2>
          <b>Hello!!</b>
        </h2>
        <h2>Welcome to IronProfile!</h2>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data!
        </p>
        <button>Create the Account</button>
      </div>
    </>
  );
};
