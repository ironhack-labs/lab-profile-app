import { createContext, useEffect, useContext } from 'react';
import useLocalStorage from './useLocalStorage';
import { getCurrentUser, loginFn, logoutFn } from '../services/auth';
import { message } from 'antd';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  // Un estado con el usuario en sesion (idealmente reflejado en LS(local storage))
  const [user, setUser] = useLocalStorage(null, 'user');

  // Metodos para interactuar con el usuario (login, logout, revisar si hay sesion en el server)

  async function login(user) {
    try {
      const { data } = await loginFn(user);
      setUser(data);
    } catch (error) {
      message.error(error.response.data.message);
    }
    //TODO: Ver que devuelve res cuando exista un error y complementar el codigo
  }

  async function logout() {
    await logoutFn();
    setUser(null);
  }

  useEffect(() => {
    // preguntamos al backend si hay un user en sesion, de ser asi hacemos login de ese user
    async function getSession() {
      const { data } = await getCurrentUser();
      if (data) {
        setUser(data);
      }
    }

    getSession();
  }, [setUser]);

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthInfo = () => {
  const authCtxValue = useContext(AuthContext);
  return authCtxValue;
};
