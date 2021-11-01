import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [myuser, setMyUser] = useState();
  const [userTrigged, setUserTrigged] = useState(false);
  const [toggleFollwer, setToggleFollwer] = useState(false);
  useEffect(() => {
    const fetchUserAccount = async () => {
      const userAccont = await axios.get('/user/oneUser');
      setMyUser(userAccont.data.oneUser);
    };

    fetchUserAccount();
  }, [userTrigged]);
  return (
    <userContext.Provider value={{ myuser, setMyUser, setUserTrigged, userTrigged, setToggleFollwer, toggleFollwer }}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserContextProvider };
