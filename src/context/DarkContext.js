import { createContext, useState } from 'react';
const DarkContext = createContext();

const DarkContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const darkTextOnly = dark ? 'dark-text' : '';
  const darkTextDark = dark ? 'dark-text' : 'text-dark';
  const darkBg = dark ? 'dark-bg dark-text' : '';
  const darkBg2 = dark ? 'dark-bg2' : '';

  const toggle = () => {
    document.body.style.backgroundColor = '#000';
  };

  return (
    <DarkContext.Provider value={{ dark, setDark, darkTextOnly, darkTextDark, darkBg2, darkBg, toggle }}>
      {children}
    </DarkContext.Provider>
  );
};

export { DarkContext, DarkContextProvider };
