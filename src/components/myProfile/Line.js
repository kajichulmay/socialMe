import React, { useContext } from 'react';
import { DarkContext } from '../../context/DarkContext';

function Line(props) {
  const { title, self } = props;
  const { dark } = useContext(DarkContext);

  return (
    <div className="flex flex-col my-2 w-11/12 mx-auto">
      <span
        className={`font-light text-2xl mb-3 capitalize
      self-${self || 'start'} ${dark ? 'text-white' : ''}`}
      >
        {title}
      </span>
      <div className={`w-full ${dark ? 'border-gray-600' : 'bg-gray-400'} border-2 `}></div>
    </div>
  );
}

export default Line;
