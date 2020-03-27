import React, { createContext, useState, useEffect } from "react";
import { loggedin } from "../../../lib/authApi";

export const UserContext = createContext();

export const UserContextProvider = props => {
  const [user, setUser] = useState();

  useEffect(() => {
    async () => {
      try {
        const user = await loggedin();
        setUser(user);
      } catch (error) {
        setUser(null);
      }
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
