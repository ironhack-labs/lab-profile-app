import React, { useState, useEffect } from "react";
import { Provider, connect } from "react-redux";

import { store } from "../lib/redux/store";
import { loggedin } from "./api/auth.api.js";

import { Loading } from "../src/components/Loading";
import { useSetUser } from "./redux/action";

export const withAuthentication = Component => () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loggedin()
      .then(user => store.dispatch(useSetUser(user)))
      .catch(e => console.error(e.response.statusText))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Provider store={store}>
      {loading && <Loading />}
      <Component />
    </Provider>
  );
};
