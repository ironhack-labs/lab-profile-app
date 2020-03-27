import axios from "axios";

const service = axios.create({baseURL: 'http://localhost:3001/'});

// Sign Up
export const signup = async (formData) => {
  const {username, password, campus, course } = formData;

  try {
    const res = await service.post('/auth/signup', {
      username, 
      password, 
      campus, 
      course
    });
  
    console.log("Signup user " + JSON.stringify(res));
    return res.data;

  } catch (error) {
    console.log(`Error ${error}`);
  }
}

// Log In
export const login = async (formData) => {
  const {username, password } = formData;

  try {
    const res = await service.post('auth/login', {
      username, 
      password
    });
  
    console.log("Logged user " + res);
    return res.data;

  } catch (error) {
    console.log(`Error ${error}`);
  }
}

// Upload file
export const upload = async (formData) => {
  const {file } = formData;

  try {
    const res = await service.post('auth/upload', {
      file
    });
  
    console.log("File uploaded " + res);
    return res.data;

  } catch (error) {
    console.log(`Error ${error}`);
  }
}

// Edit
export const edit = async (formData) => {
  const {username, password, campus } = formData;

  try {
    const res = await service.post('auth/edit', {
      username, 
      password,
      campus
    });
  
    console.log("Profile edited " + res);
    return res.data;

  } catch (error) {
    console.log(`Error ${error}`);
  }
}

// Log Out
export const logout = async (username) => {

  try {
    const res = await service.post('auth/logout', {
      username
    });
  
    console.log("User logged out " + res);
    return res.data;

  } catch (error) {
    console.log(`Error ${error}`);
  }
}

// Logged In
export const loggedin = async (username) => {

  try {
    const res = await service.get('auth/loggedin', {
      username
    });
  
    console.log("Check user loged in " + res);
    return res.data;

  } catch (error) {
    console.log(`Error ${error}`);
  }
}
