import React, { useState, useEffect, createContext } from 'react'
import Loading from '../Loading/Loading'
import AuthService from '../AuthService';

export const AuthContext = createContext();

const service = new AuthService();

export const AuthProvider = ({children}) => {

  const [ current, setCurrent ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
          if(!current){
            service.loggedin()
            .then( user => {
              setCurrent(user)
              setLoading(false);
            })
            .catch( error => {
              console.log(error)
              setLoading(false);
            })
          } 
  },[ current ])
  
  return (
    loading ?
    <Loading/> :
    <AuthContext.Provider value={{current, setCurrent}}>
      {children}
    </AuthContext.Provider>
  )
}
