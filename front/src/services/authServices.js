import axios from "axios";

const authService = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true
});

export const doSignup = async ({ username, password, campus, course }) => {
  const res = await authService.post("/signup", {
    username,
    password,
    campus,
    course
  });
  console.log("Respuesta del server", res.data);
  console.log("Usuario Creado");

  return res.data;
};

export const doLogin = async ({ username, password }) => {
  console.log("Login usuario...", username, password);
  const res = await authService.post("/login", {
    username,
    password
  });
  console.log("Respuesta del server", res.data);
  return res.data;
};

export const doEdit = async ({ username, campus, course }) => {
  console.log("edit!");
  const res = await authService.post("/edit", {
    username,
    campus,
    course
  });
  console.log("respuesta del server al edit", res);
};

export const doLogout = async () => {
  console.log("loggin out!");
  const res = await authService.post("/logout");
  console.log("respuesta del server al logout", res);
};

export const whoUser = async () => {
  console.log("whoUser");
  const res = await authService.post("/whoami");
  console.log("respuesta del server al whami", res.data);
  return res.data;
};
