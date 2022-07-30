import { createContext, useContext } from "react";
export const LogUserContext = createContext("aa");
export const LogProvider = ({ children }) => {
  const testValue = "My Context Value";
  return (
    <LogUserContext.Provider value={testValue}>
      {children}
    </LogUserContext.Provider>
  );
};
export const UseNameValue = () => {
  return useContext(LogProvider);
};
