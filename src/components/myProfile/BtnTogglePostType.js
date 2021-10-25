import React, { useState } from 'react';
import lockIcon from '../../images/lockIcon.png';
import unlockIcon from '../../images/unlockIcon.png';

function BtnTogglePostType() {
  const [postType, setPostType] = useState('public');

  const hdlToggleType = () => {
    setPostType(cur => {
      return cur === 'public' ? 'private' : 'public';
    });
  };

  return (
    <button
      onClick={hdlToggleType}
      className="bg-white
    border-yellow-400 px-3 w-28 rounded-full flex
    justify-between shadow-input py-2">
      <img src={postType === 'public' ? unlockIcon : lockIcon} alt="" />

      {/* {postType === 'public' ?
        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
        :
        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
      } */}


      <p className="ml-1 font-light uppercase text-base text-black">
        {postType}
      </p>
    </button>
  );
}

export default BtnTogglePostType;
