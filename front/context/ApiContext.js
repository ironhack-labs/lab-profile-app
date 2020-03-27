import React, { createContext, useState, useEffect } from "react";
import { whoUser } from "../lib/auth.api";

export const ApiContext = createContext();

export const ApiContextProvider = props => {
  const [user, setUser] = useState();
  console.log("usuario actual", user);

  useEffect(() => {
    (async () => {
      try {
        const user = await whoUser();
        console.log("is logged", user);
        setUser(user);
      } catch (error) {
        console.log("error", error);
        setUser(null);
      }
    })();
  }, []);

  return (
    <ApiContext.Provider value={{ user, setUser }}>
      {props.children}
    </ApiContext.Provider>
  );
};
