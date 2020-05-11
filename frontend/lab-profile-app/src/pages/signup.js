import React from 'react';

const Signup = ({
  handleInput,
  signup,
  username,
  password,
  campus,
  course,
}) => {
  return (
    <div id="containerSignUp">
      <div id="inputs">
        <h1>Sign Up</h1>
        <form onSubmit={signup}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInput}
          />
          <br />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
          <br />
          <br />
          <label>Campus </label>
          <input
            type="text"
            name="campus"
            value={campus}
            onChange={handleInput}
          />
          <br />
          <br />
          <label>Course </label>
          <input
            type="text"
            name="course"
            value={course}
            onChange={handleInput}
          />
          <br />
          <br />
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div id="texto">
        <h4>Hello!</h4>
        <p>Welcome to IronProfile!</p>
        <small>
          If you signup, you agree with all our
          <br /> terms and conditions where we can <br />
          do whatever we want whit the data!
        </small>
      </div>
    </div>
  );
};

export default Signup;
