import { user as initialUser } from '../service/localStorage';
import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
