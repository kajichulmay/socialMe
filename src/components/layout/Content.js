import { useContext } from 'react';
import { DarkContext } from '../../context/DarkContext';

function Content({ children }) {
  const { dark } = useContext(DarkContext);
  // return <div className={` 2xl:container 2xl:mx-auto flex ${dark ? 'dark-bg' : 'bg-secondary'}`}>{children}</div>;
  return (
    <div className={` 2xl:container 2xl:mx-auto h-screen flex ${dark ? 'dark-bg' : 'bg-secondary'}`}>{children}</div>
  );
}

export default Content;
