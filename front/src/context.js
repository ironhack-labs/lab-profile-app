import {useState, createContext, useContext, useEffect  } from 'react'
  import { loggedinFunction } from './authService'
  
  export const AppContext = createContext()
  
  export const AppCtxProvider = props => {
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      async function getSessionData() {
        const { data } = await loggedinFunction()
        login(data);
      }
  
      getSessionData()
    }, [])
  
    const login = userInfo => {
      setUser(userInfo)
    }
  
    const logout = () => {
      setUser(null)
    }
  
    const value = { user, login, logout }
  
    return (
      <AppContext.Provider {...props} value={value} />
    )
  }
  
  export const useContextInfo = () => useContext(AppContext)