import React, { createContext, useState } from 'react';

// We create the context object which will contain our data
export const AppContext = createContext();

// We create a provider component that will allow its "descendants" aka children to use the context data
export const AppProvider = ({ children }) => {
  // Get the user data from the localStorage, or set it as an empty object in case there is no user stored
  const initialUser = JSON.parse(localStorage.getItem('user')) || {};
  const [user, setUser] = useState(initialUser); // Create a user state variable using useState hook

  // Declare a function that will allow us to reset all the context. For this lab, we only have one state var (user)
  const resetContext = () => {
    setUser({});
  }

  // After calling the AppProvider component in the index.js, it will return to the app the following jsx...
  // From the documentation:
  // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
  // All consumers that are descendants of a Provider will RE-RENDER whenever the Provider’s value prop changes.
  return (
    <AppContext.Provider value={{ user, setUser, resetContext }}>
      { children }
    </AppContext.Provider>
  );
};