import React, { createContext } from "react";

export const ApiContext = createContext();
export const ApiContextProvider = props => {
  const name = "Ruben";
  return (
    <ApiContext.Provider
      value={{
        name
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};
