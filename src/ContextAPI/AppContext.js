import React, { createContext, useContext, useState } from 'react';



const AppContext = createContext();



export const AppProvider = ({ children }) => {

 const [mode, setMode] = useState("dark")
   


 


  return (
    <AppContext.Provider value={{mode, setMode}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
