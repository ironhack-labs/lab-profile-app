import axios from "axios";
import React, { useContext } from "react";

export const UserContext = React.createContext();

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
