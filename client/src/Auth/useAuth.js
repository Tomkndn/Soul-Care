import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSign, setIsSign] = useState(false);

  const userInfo = (userData) => {
    setUser(userData);
    setIsSign(true)
  };
  
  const SignOut = () => {
    setUser(null);
    setIsSign(false)
  };

  return (
    <AuthContext.Provider value={{ user, userInfo, SignOut, isSign }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
