import { createContext, useState } from 'react';
const DarkContext = createContext();

const DarkContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const darkTextOnly = dark ? 'dark-text' : '';
  const darkTextDark = dark ? 'dark-text' : 'text-dark';

  const darkBg2 = dark ? 'dark-bg2' : '';

  return (
    <DarkContext.Provider value={{ dark, setDark, darkTextOnly, darkTextDark, darkBg2 }}>
      {children}
    </DarkContext.Provider>
  );
};

export { DarkContext, DarkContextProvider };
