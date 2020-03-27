import React, { createContext, useState, useEffect } from 'react';

import { isLoggedIn } from '../services/authService';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
