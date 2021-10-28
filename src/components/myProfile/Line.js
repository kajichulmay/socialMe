import React from 'react';

function Line(props) {
  const { title, self } = props;

  return (
    <div className="flex flex-col my-2 w-11/12 mx-auto">
      <span
        className={`font-light text-2xl mb-3 capitalize mt-5
      self-${self || 'start'}`}
      >
        {title}
      </span>
      <div className="w-full bg-gray-400 border-2 "></div>
    </div>
  );
}

export default Line;
