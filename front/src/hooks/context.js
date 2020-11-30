import { useState, createContext, useContext, useEffect } from 'react';

import { currentUserFunction } from '../services/auth';

export const AppContext = createContext();

export const AppCtxProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getSessionData() {
      const { data } = await currentUserFunction();
      login(data);
    }

    getSessionData();
  }, []);

  const login = (userInfo) => {
    setUser(userInfo);
  };


  const addProfilePic = (img) => setUser({ ...user, img });

  const logout = () => {
    //TODO: Cerrar la sesion en el server y en el cliente
    setUser(null);
  };

  const updateUserCtx = (userInfo) => {
    setUser(
      user.username = userInfo.user,
      user.course = userInfo.course,
      user.campus = userInfo.campus
    )
    console.log(user)
  };

  const value = { user, login, logout, addProfilePic, updateUserCtx};

  return <AppContext.Provider {...props} value={value} />;
};

// Opcional: agregamos un custom hook para evitar consumir en cada componente nuestro ctx

export const useContextInfo = () => useContext(AppContext);
