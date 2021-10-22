import React from 'react';

function ProfilePicUi({ beforeSize, afterSize, url }) {
  return (
    // <div
    //   className={` rounded-full  w-${w} h-${h}  border-white `}
    //   style={{
    //     backgroundImage: `url('${url}')`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    // ></div>
    <div
      className={` rounded-full w-${afterSize} h-${afterSize} 
    md:w-${beforeSize} md:h-${beforeSize} 
    border-white `}
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
}

export default ProfilePicUi;
