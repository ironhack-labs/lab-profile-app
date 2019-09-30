import axios from "axios";

const profileApi = axios.create({
  baseURL: "/auth"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    profileApi
      .get("/profile")
      .then(response => {
        console.log(response.data);
        resolve(respose.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
