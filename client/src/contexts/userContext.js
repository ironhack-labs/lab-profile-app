import React, {createContext, useState} from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState('');

  return(
    <UserContext.Provider value={{setUser, user}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;