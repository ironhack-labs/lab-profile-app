import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});


export const doSignUp = async (user) => {
  const res = await api.post("/auth/signup", user);
  console.log("Created user");
  return res.data;
}