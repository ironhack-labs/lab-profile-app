import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:5000/api",
  withCredentials: true
});

const errHandler = err => {
  // console.error(err);
  if (err.response && err.response.data) {
    // console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  //este método se utiliza para obtener desdfe la base de datos, via nuestra API express la información concerniente al user id
  //que solicitamos, gracias a pasar el id de usuario que queramos de mongo
  getUserdata(id) {
    //utlizamos nuestro servicio de axios para interrogar a nuestra API via GET
    return service
      .get("/users/" + id)
      .then(res => res.data)
      .catch(errHandler);
  },

  //aquí usamos nuesto servicio de axios para pasar la información al back con el nuevo username
  //por favor advierte de que estamos comunicándonos con el server via verbo PUT
  updateUsername(newUsername) {
    //esta parte es la que me envía la información nueva del usuario al endpoint de actualización
    //este {username: newUsername} es el payload que mandamos al back y con el cual queremos efectuar la actualización
    return service
      .put("/users/update", { username: newUsername })
      .then(res => res.data)
      .catch(errHandler);
  },

  // Method addPicture
  addPicture(file) {
    const formData = new FormData();
    formData.append("photo", file);
    return service
      .post("/users/first-user/pictures", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  }
};
