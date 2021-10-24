import React, { useState } from 'react';

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
    border-yellow-400 px-3 rounded-full flex
    justify-center items-center shadow-input py-2">

      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 icon-grad outline-black" viewBox="0 0 5 0" fill="currentColor">
        <defs>
          <linearGradient id="iconGrad" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(255, 233, 155, 1)" />
            <stop offset="50%" stop-color="rgba(255, 171, 124, 1)" />
            <stop offset="100%" stop-color="rgba(255, 86, 80, 1)" />
          </linearGradient>
        </defs>
        {postType === 'public' ?

          <path
            d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
          :
          <path
            fill-rule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clip-rule="evenodd"
          />
        }</svg>

      <p className="font-light uppercase text-base text-black">
        {postType}
      </p>
    </button>
  );
}

export default BtnTogglePostType;
