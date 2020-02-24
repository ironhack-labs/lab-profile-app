import React from "react";

const Signup = ({
  handleInput,
  signup,
  username,
  password,
  campus,
  course
}) => {
  return (
    <div id="row">
      <div>
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
          <select type="text" name="campus" onChange={handleInput} value={campus} >
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Miami">Miami</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdan">Amsterdan</option>
            <option value="México">México</option>
            <option value="Sao Paulo">Sao Paulo</option>
            <option value="Lisbon">Lisbon</option>
          </select>
          <br />
          <br />
          <label>Course </label>
          <select type="text" name="course" onChange={handleInput} value={course} >
            <option value="WebDev">WebDev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>
          <br />
          <br />
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div>
        <h4>Hello!</h4>
        <p>Welcome to IronProfile!</p>
        <small>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want whit the data!
        </small>
      </div>
    </div>
  );
};

export default Signup;
