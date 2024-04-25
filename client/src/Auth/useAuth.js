import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSign, setIsSign] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user && user.category === "admin") {
      setIsAdmin(true);
    }
  }, [user])
  

  const userInfo = (userData) => {
    setUser(userData);
    setIsSign(true)
  };
  
  const SignOut = () => {
    setUser(null);
    setIsSign(false)
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, userInfo, SignOut, isSign, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
