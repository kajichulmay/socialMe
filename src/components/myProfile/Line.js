import React from 'react';

function Line(props) {


  return (
    <div className="flex flex-col my-4 w-11/12 mx-auto">
      <span className="font-light text-2xl mb-3 capitalize">
        {props.title}
      </span>
      <div className="w-full bg-gray-400 border-2 "></div>
    </div>
  );
}

export default Line;
