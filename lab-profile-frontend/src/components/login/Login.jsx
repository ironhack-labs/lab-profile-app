import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../auth/authService';
import { Link } from 'react-router-dom';

function Login(props) {
  const initialState = {
    username: '',
    password: '',
  };

  const [login, setLogin] = useState(initialState);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const service = new AuthService();
    service.login(login.username, login.password).then((response) => {
      props.getUser(response);
      history.push('/profile');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-layout">
        <div className="container-left">
          <div className="content-left">
            <h1>Log in</h1>
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User name"
                value={login.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <p>
              If you don't have an account yet, you careate your profile{' '}
              <Link to="/signup">here</Link>
            </p>
          </div>
        </div>
        <div className="container-right">
          <div className="content-left">
            <h2>Hello!!</h2>
            <span>Awesome to have at IronProfile again!</span>
          </div>
          <div className="content-center">
            <p>
              If you login, you agree with all our terms and conditions where we
              want this the data!
            </p>
            <button className="link-reverse">Log in</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
