import React, { useState } from 'react';
import AuthService from '../../services/authService';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const initialState = {
    username: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const service = new AuthService();
  let history = useHistory();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = state;
    service
      .login(username, password)
      .then((res) => {
        setState(initialState);
        console.log(res);
        props.callback(res);
        history.push('/profile');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
