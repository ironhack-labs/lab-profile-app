import React, { createContext, useState, useEffect } from "react";
import { whoUser } from "../services/authServices";

export const ApiContext = createContext();
export const ApiContextProvider = props => {
  const [user, setUser] = useState();
  console.log("usuario actual", user);

  useEffect(() => {
    (async () => {
      console.log("useEffect del contextProvider");

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
