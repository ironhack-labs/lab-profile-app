import React from 'react';

const Signup = () => {
  return(
    <div className="section">
      <div className="columns">
        <div className="column">
          <h1>Signup</h1>
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
            <div className="field">
              <label className="label">Campus</label>
              <div className="control">
                <input className="input" type="text" name="campus" placeholder="Enter your campus..." />
              </div>
            </div>
            <div className="field">
              <label className="label">Course</label>
              <div className="control">
                <input className="input" type="text" name="course" placeholder="Enter your course..." />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <h2>Hello!!!</h2>
          <h3>Welcome to IronProfile</h3>
          <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
          <button className="Button">Create the Account</button>
        </div>
      </div>
    </div>
  )
};

export default Signup;