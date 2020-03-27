import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

  const doSignup = async ({username, password, campus, course}) => {
    // Axios post a ruta /auth/signup en servidor
    // para crear un usuario en mongodb
    console.log(`Registrando usuario...`);
    console.log(username, password, campus, course);
    const res = await api.post("/auth/signup", {
      username,
      password,
      campus,
      course
    });
    console.log("Created User");
    console.log(res.data);
    return res.data;
  };