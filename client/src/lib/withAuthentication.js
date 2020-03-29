import React, { useState, useEffect } from "react";
import { UserContext, loggedin } from "./authService";

// THIS is a HOC
export const withAuthentication = Component => () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When the app starts this runs only once
    console.log("Welcome to app! 👨🏼‍💻");

    // Try to get the current logged in user from our backend
    loggedin()
      .then(user => {
        console.log(`Welcome again user ${user.username}`);
        setUser(user);
      })
      .catch(e => {
        console.error("No user logged in ");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {/* {loading && <div>Loading...</div>} */}
      <Component />
    </UserContext.Provider>
  );
};
