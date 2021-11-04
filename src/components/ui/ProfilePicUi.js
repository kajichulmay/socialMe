import React from 'react';
import { useHistory } from 'react-router-dom';

function ProfilePicUi({ beforeSize, afterSize, url, id }) {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/myprofile/${id}`)}
      className={` rounded-full w-${afterSize} h-${afterSize} 
    md:w-${beforeSize} md:h-${beforeSize} 
    border-white cursor-pointer `}
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  );
}

export default ProfilePicUi;
