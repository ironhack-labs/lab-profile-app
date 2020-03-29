import axios from "axios";

const authApi = axios.create({ baseURL: "http://localhost:3000/" });

export const signup = async ({ username, password, campus, course }) => {
  const response = await authApi.post("auth/signup", {
    username,
    password,
    campus,
    course
  });
  return response.data;
};

export const login = async ({ username, password }) => {
  const response = await authApi.post("auth/login", {
    username,
    password
  });
  return response.data;
};

export const upload = async file => {
  const response = await authApi.post("auth/upload", file);
  console.log(response);
};

export const edit = async ({ username, campus, course }) => {
  const response = await authApi.post("auth/edit", {
    username,
    campus,
    course
  });
  console.log(response);
};

export const logout = async () => {
  const response = await authApi.post("auth/logout");
  console.log(response);
};

export const loggedin = async () => {
  const response = await authApi.get("auth/loggedin");
  console.log(response);
};
