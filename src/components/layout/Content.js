import React from 'react';

function Content({ children }) {
  return <div className=" md:container md:mx-auto flex bg-green-400">{children}</div>;
}

export default Content;
