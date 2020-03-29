import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:3000" });

export const auth = (data, type) => {
  return dispatch => {
    dispatch({ type: "REQUEST" });
    server
      .post(`/auth/${type}`, data)
      .then(res => {
        const user = res.data;
        dispatch({
          type: "SUCCESS",
          user: user
        });
      })
      .catch(error => {
        dispatch({
          type: "FAILURE",
          error: error
        });
      });
  };
};
