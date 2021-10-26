import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [myuser, setMyUser] = useState();

  useEffect(() => {
    const fetchUserAccount = async () => {
      const userAccont = await axios.get('/user/oneUser');
      setMyUser(userAccont.data.oneUser);
    };

    fetchUserAccount();
  }, []);

  return <userContext.Provider value={{ myuser, setMyUser }}>{children}</userContext.Provider>;
};

export { userContext, UserContextProvider };
