import React from 'react';

function ProfilePicUi({ w, h, url }) {
  return (
    <div
      className={` rounded-full  w-${w} h-${h}  border-white `}
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
}

export default ProfilePicUi;
