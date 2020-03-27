import React, {createContext, useState} from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');

  return(
    <UserContext.Provider value={{setUser, setCampus, setCourse, user, campus, course}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;