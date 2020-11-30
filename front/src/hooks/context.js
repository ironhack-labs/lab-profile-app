import {
    useState,
    createContext,
    useContext,
    useEffect
  } from 'react'
  
  import { loggedFn } from '../services/auth'
  
  export const AppContext = createContext()
  
  export const AppCtxProvider = props => {
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      async function getSessionData() {
        const { data } = await loggedFn()
        login(data);
      }
  
      getSessionData()
    }, [])
  
    const login = userInfo => {
      setUser(userInfo)
    }

    const addProfilePic = img => setUser({ ...user, img })
  
    const logout = () => {
      setUser(null)
    }
  
    const value = { user, login, logout }
  
    return (
      <AppContext.Provider {...props} value={value} />
    )
  }
  
  export const useContextInfo = () => useContext(AppContext)