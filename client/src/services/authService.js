import axios from "axios";

const authApi = axios.create({ baseURL: "http://localhost:3000/" });

export const signup = async ({ username, password, campus, course }) => {
  const response = await authApi.post("auth/signup", {
    username,
    password,
    campus,
    course
  });
};

export const login = async ({ username, password }) => {
  const response = await authApi.post("auth/login", {
    username,
    password
  });
};

export const upload = async file => {
  const response = await authApi.post("auth/upload", file);
};

export const edit = async ({ username, campus, course }) => {
  const response = await authApi.post("auth/edit", {
    username,
    campus,
    course
  });
};

export const logout = async () => {
  const response = await authApi.post("auth/logout");
};

export const loggedin = async () => {
  const response = await authApi.get("auth/loggedin");
};
