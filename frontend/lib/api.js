import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const doSignup = async (username, password, campus, course) => {
  console.log(`Registrando usuario...`);

  const res = await api.post(
    "/auth/signup",
    username,
    password,
    campus,
    course
  );
  console.log("Created User");
  console.log(res.data);
  return res.data;
};

export const doLogin = async (username, password) => {
  console.log("Do Login");
  const res = await api.post("/auth/login", username, password);
  console.log(res.data);
  return res.data;
};

export const doLogout = async () => {
  const res = await api.get("/auth/logout");
  console.log(res.data);
  return res.data;
};

export const whoami = async () => {
  const res = await api.get("/auth/whoami");
  console.log(res.data);
  return res.data;
};
