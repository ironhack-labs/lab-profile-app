import React, { createContext, useState, useEffect } from 'react';

import { isLoggedIn } from '../services/authService';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  console.log('usuario actual', user);

  useEffect(() => {
    (async () => {
      console.log('useEffect del contextProvider');

      try {
        const { user } = await isLoggedIn();
        console.log('is logged', user);
        setUser(user);
      } catch (error) {
        console.log('error', error);
        setUser(null);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
