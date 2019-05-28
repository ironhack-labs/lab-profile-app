import axios from "axios";

// Creamos el header con el token
axios.defaults.headers = {
  Authorization: localStorage.getItem("TOKEN")
};

// React pone una variable de entorno para saber el entorno y en base al entorno hacer peticiones al back
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction ? "url_de_heroku" : "http://localhost:3000/api";

export const signup = auth => {
  return axios
    .post(`${base_url}/auth/signup`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const login = auth => {
  return axios
    .post(`${base_url}/auth/login`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const upload = image => {
  return (
    // el tercer argumento es configuracion y podemos poner los headers de multipart
    axios
      .post(`${base_url}/auth/upload`, image, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(error => {
        throw error.response.data;
      })
  );
};

export const edit = profile => {
  return axios
    .post(`${base_url}/auth/edit`, profile, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const loggedin = () => {
  return axios
    .get(`${base_url}/auth/loggedin`)
    .then(res => res.data)
    .catch(error => {
      console.log(error);
      throw error.response.data;
    });
};
