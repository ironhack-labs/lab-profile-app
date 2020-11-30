import { useState, createContext, useContext } from 'react';

export const AppContext = createContext();

export const AppCtxProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = (userInfo) => {
    setUser(userInfo);
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AppContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(AppContext);
