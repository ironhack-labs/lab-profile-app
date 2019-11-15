import React from 'react';

const Login = () => {
  return(
    <div className="section">
      <h1>Login</h1>
      <div className="columns">
        <div className="column">
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
          
        </div>
      </div>
    </div>
    
  )
};

export default Login;