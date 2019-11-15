import React from 'react';

const Login = () => {
  return(
    <div className="section">
      <div className="columns">
        <div className="column">
          <h1>Login</h1>
          <div className="form">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" name="username" placeholder="Enter your username..." />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" name="password" placeholder="Enter your password..." />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <h2>Hello!!!</h2>
          <h3>Awesome to have you at IronProfile again!</h3>
          <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
          <button className="Button">Log In</button>
        </div>
      </div>
    </div>
    
  )
};

export default Login;