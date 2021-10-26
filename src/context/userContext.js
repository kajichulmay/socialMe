import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [myuser, setMyUser] = useState();
  const [userTrigged, setUserTrigged] = useState(false);

  useEffect(() => {
    const fetchUserAccount = async () => {
      const userAccont = await axios.get('/user/oneUser');
      setMyUser(userAccont.data.oneUser);
    };

    fetchUserAccount();
  }, [userTrigged]);
  console.log(myuser);
  return <userContext.Provider value={{ myuser, setMyUser, setUserTrigged }}>{children}</userContext.Provider>;
};

export { userContext, UserContextProvider };
