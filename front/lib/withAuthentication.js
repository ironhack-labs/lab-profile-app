import React, { useState, useEffect } from "react";
import { UserContext, doLoggedin } from "./authService";

// THIS is a HOC
export const withAuthentication = Component => () => {
  const [user, setUser] = useState();
  console.log("sassssssssssssssss", user);

  useEffect(() => {
    // When the app starts this runs only once
    console.log("Welcome to app! 👨🏼‍💻");

    // Try to get the current logged in user from our backend
    doLoggedin()
      .then(user => {
        console.error(`Welcome again user ${user.username}`);
        setUser(user);
      })
      .catch(e => {
        console.error("No user logged in ");
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component />
    </UserContext.Provider>
  );
};
