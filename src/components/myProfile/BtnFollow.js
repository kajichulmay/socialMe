import React, { useState } from 'react';

function BtnFollow() {
  const [isFollow, setIsFollow] = useState(false);

  const title = isFollow ?
    [
      'bg-white text-red-400 whiteBtnHover',
      'Follow',
      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
    ] : [
      ' bg-primary-grad text-white forhover',
      'Following',
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    ];

  return (
    <div className="absolute top-2 right-2 ">
      <button
        onClick={() => setIsFollow(cur => !cur)}
        className={
          `rounded-full shadow-input px-3 py-2 flex justify-center items-center
          ${title[0]}
      `}>
        {title[1]}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
          {title[2]}
          {/* {isFollow ?
            :
          } */}
        </svg>

      </button>
    </div>
  );
}

export default BtnFollow;
