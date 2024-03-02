

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";


function SignupPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [campus, setCampus] = useState("");
  const [course, setCourse] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleCampus = (e) => setCampus(e.target.value);
  const handleCourse= (e) => setCourse(e.target.value);
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = {username, password, campus, course};
    axios.post(`${API_URL}/auth/signup`, requestBody)
    .then((response) => {
      navigate('/login');
    })
    .catch((error) => {
      console.error(erroisAuthenticated);
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
};
   
   
  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>
 
      <form onSubmit={handleSignupSubmit}>
        <label>Username:</label>
        <input 
          type="text"
          name="usernmae"
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
 
        <label>Campus:</label>
        <input 
          type="text"
          name="campus"
          value={campus}
          onChange={handleCampus}
        />

        <label>Course:</label>
        <input 
          type="text"
          name="course"
          value={course}
          onChange={handleCourse}
        />
      { errorMessage && <p className="error-message">{errorMessage}</p> }
        <div>
            <h1>Welcome to IronProfile</h1>
            <div>
                <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                <button type="submit"><b>Create the account</b></button>
            </div>
        </div>
       </form> 
    </div>
  )
}

export default SignupPage;
