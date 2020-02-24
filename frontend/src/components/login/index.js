import React from "react";
import { Link } from "react-router-dom";

const index = ({handleInputs, login, username, password}) => {
  return (
    <div id="row">
      <div>
        <h1>Log In</h1>
        <form onSubmit={login}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputs}
          />
          <br />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputs}
          />
          <br/>
          <br/>
          <button type="submit">LogIn</button>
        </form>
        <p>
          If you don't have an account yet you can create your account
          <Link to='/signup'> here</Link>
        </p>
      </div>
      <div>
        <h4>Hello!</h4>
        <p>Awesome to have at IronProfile again!</p>
        <small>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want whit the data!
        </small>
      </div>
    </div>
  );
};

export default index;
