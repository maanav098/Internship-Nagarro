import React, { createContext, useContext, useState, ReactNode } from "react";
import { SESSION_STORAGE_KEYS } from "../pages/helpers/constants";

interface AuthContextType {
  isAuthenticated: boolean;
  userLogin: (username:string,password:string) => void;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = sessionStorage.getItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN);
  
    return !!token;
  });
  const userLogin = (username:string , password:string )=> {
    sessionStorage.setItem(SESSION_STORAGE_KEYS.USERNAME,username);
    sessionStorage.setItem(SESSION_STORAGE_KEYS.PASSWORD,password);
    setIsAuthenticated(true);
  }

  const login = (token: string) => {
    sessionStorage.setItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN, token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,userLogin,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
