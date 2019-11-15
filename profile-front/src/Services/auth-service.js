import axios from 'axios'; // Import axios to enable api calls to our back-end

// Export signup function, which receives the username, password, campus and course as parameters to enable signup
export const signup = (username, password, campus, course) => {
  
  // Return a call to our /signup route, while sending the parameters obtained from the form/front-end
  return axios.post('http://localhost:3000/api/signup', {username, password, campus, course});

}

// Export login function, which receives the username and password as parameters to enable login
export const login = (username, password) => {
  
  // Return a call to our /login route, while sending the parameters obtained from the form/front-end
  return axios.post('http://localhost:3000/api/login', {username, password});

}