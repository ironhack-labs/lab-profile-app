import React, { useState, useEffect } from "react";
import { UserContext, loggedin } from "./authService";

export const withAuthentication = Component => () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to get the current logged in user from the backend
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
