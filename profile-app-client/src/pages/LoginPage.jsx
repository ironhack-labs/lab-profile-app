

import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const API_URL = "http://localhost:5005";


function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername= (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password };
    axios.post(`${API_URL}/auth/login`, requestBody)
    .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();    
        navigate('/');                                 
    })
    .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
 
    
  
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Username:</label>
        <input 
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <p>If you don't have an account yet, you can create your account <Link to={'/signup'}>here</Link> </p>
        <div>
            <h3>HELLO!</h3>
            <h4>Awesome to have at IronProfile again</h4>
            <div>
                <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                <button type="submit"><b>Login</b></button>
                { errorMessage && <p className="error-message">{errorMessage}</p> }
            </div>
        </div>
        </form>

    </div>
  )
}

export default LoginPage;
