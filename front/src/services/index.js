import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://localhost:3000");

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  signup: async user => {
    return await service.post("/signup", user);
  },
  login: async user => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },
  loggedIn: async () => {
    return await service.post("/loggedin");
  },
  edit: async () => {
    return await service.post("/edit");
  }
};

export default MY_SERVICE;
