import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/auth",
    withCredentials: true
  });
  
  export const doSignup = async ({ username, password, campus, course }) => {
    try {
      const { data } = await api.post('/signup', {
        username,
        password,
        campus,
        course
      });
      return data.user;
    } catch (error) {
      return error.response.data;
    }
  };
  
  export const doLogin = async (username, password) => {
    console.log("Do Login");
    const res = await api.post("/login", {
      username,
      password
    });
    console.log(res.data);
    return res.data;
  };
  
  export const doLogout = async () => {
    const res = await api.get("/logout");
    console.log(res.data);
    return res.data;
  };
  
  export const isLoggedIn = async () => {
    const res = await api.get('/loggedin');
    return res.data;
  };

  export const uploadPhoto = async photo => {
    const res = await api.put('/upload', photo);
  
    return res.data.image;
  };
  
  export const editProfile = async ({ username, campus, course }) => {
    const res = await api.put('/edit', { username, campus, course });
  
    return res.data.user;
  };