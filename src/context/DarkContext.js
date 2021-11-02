import { createContext, useState } from 'react';
// import { toggleDark } from '../service/localStorage';
const DarkContext = createContext();


// const currentMode = localStorage.getItem('isDarkTheme');
const currentMode = localStorage.getItem('isDarkTheme') === 'true';

const DarkContextProvider = ({ children }) => {

  const [dark, setDark] = useState(currentMode);

  console.log(typeof dark);
  console.log(!!dark);

  const darkTextOnly = dark ? 'dark-text' : '';
  const darkTextDark = dark ? 'dark-text' : 'text-dark';
  const darkBg = dark ? 'dark-bg dark-text' : '';
  const darkBg2 = dark ? 'dark-bg2' : '';

  return (
    <DarkContext.Provider value={{ dark, setDark, darkTextOnly, darkTextDark, darkBg2, darkBg }}>
      {children}
    </DarkContext.Provider>
  );
};

export { DarkContext, DarkContextProvider };
