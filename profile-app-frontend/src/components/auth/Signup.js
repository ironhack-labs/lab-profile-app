import React, { useState } from 'react';
import AuthService from '../../services/authService';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
  const initialState = {
    username: '',
    password: '',
    campus: '',
    course: '',
  };
  const [state, setState] = useState(initialState);
  const service = new AuthService();
  let history = useHistory();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, campus, course } = state;
    service
      .signup(username, password, campus, course)
      .then((res) => {
        setState(initialState);
        props.callback(res);
        history.push('/profile');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <br />
        <label>Campus</label>
        <input
          type="text"
          name="campus"
          value={state.campus}
          onChange={handleChange}
        />
        <br />
        <label>Course</label>
        <input
          type="text"
          name="course"
          value={state.course}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Create the account</button>
      </form>
    </div>
  );
};

export default Signup;
