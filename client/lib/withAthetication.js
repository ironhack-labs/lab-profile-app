import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "../lib/redux/store";
import { loggedin } from "./api/auth.api.js";
import { addUser } from "./redux/action";

import { Loading } from "../src/components/Loading";

export const withAuthentication = Component => () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loggedin()
      .then(user => {
        addUser(user);
      })
      .catch(error => {
        console.log(error.response.data.status);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Provider store={store}>
      {loading && <Loading />}
      <Component />
    </Provider>
  );
};
