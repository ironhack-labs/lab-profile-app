import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../auth/authService';

function Signup(props) {
  const initialState = {
    username: '',
    password: '',
    campus: '',
    course: '',
  };

  const [signup, setSignup] = useState(initialState);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignup({ ...signup, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const service = new AuthService();

    service
      .signup(signup.username, signup.password, signup.campus, signup.course)
      .then((response) => {
        props.getUser(response);
        history.push('/profile');
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container-layout">
        <div className="container-left">
          <div className="content-left">
            <h1>Sign up</h1>
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User name"
                value={signup.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={signup.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="campus">Campus</label>
              <select
                name="campus"
                onChange={handleChange}
                value={signup.campus}
              >
                <option value=""></option>
                <option value="Madrid">Madrid</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Miami">Miami</option>
                <option value="Paris">Paris</option>
                <option value="Berlin">Berlin</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="México">México</option>
                <option value="Sao Paulo">Sao Paulo</option>
                <option value="Lisbon">Lisbon</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="course">Course</label>
              <select
                name="course"
                onChange={handleChange}
                value={signup.course}
              >
                <option value=""></option>
                <option value="Web Dev">Web Dev</option>
                <option value="Barcelona">Barcelona</option>
                <option value="UX/ UI">UX/ UI</option>
                <option value="Data Analytics">Data Analytics</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container-right">
          <div className="content-left">
            <h2>Hello!!</h2>
            <span>Welcome to IronProfile!</span>
          </div>
          <div className="content-center">
            <p>
              If you signup, you agree with all our terms and conditions where
              we want this the data!
            </p>
            <button className="link-reverse">Create the Account</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
