import { useContext } from 'react';
import { DarkContext } from '../../context/DarkContext';

function Content({ children }) {
  const { dark } = useContext(DarkContext);

  return (
    // <div className={` 2xl:container 2xl:mx-auto  lg:h-screen flex ${dark ? 'dark-bg' : 'bg-secondary'}`}>
    <div className={` 2xl:mx-auto  lg:h-screen flex ${dark ? 'dark-bg' : 'bg-secondary'}`}>{children}</div>
  );
}

export default Content;
