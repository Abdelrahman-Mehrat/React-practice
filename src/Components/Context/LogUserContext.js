import { createContext, useContext, useState } from "react";
export const LogUserContext = createContext();
export const LogProvider = ({ children }) => {
  const [name, setName] = useState("a");
  const [isLogin, setIsLogin] = useState(null);
  const handleName = (e) => {
    setName("Waleed");
    setIsLogin(true);
  };
  return (
    <LogUserContext.Provider value={{ name, handleName, isLogin }}>
      {children}
    </LogUserContext.Provider>
  );
};
export const UseNameValue = () => {
  return useContext(LogProvider);
};
