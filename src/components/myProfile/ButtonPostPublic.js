import React from 'react';

function ButtonPostPublic() {
  return (
    <button className="bg-white border-opacity-30  box-border border-yellow-400 py-2 px-3 m-2 rounded-full flex justify-between items-center  shadow-input forHoverButtonPost  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-5 mb-2 icon-grad"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <defs>
          <linearGradient id="iconGrad" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(255, 233, 155, 1)" />
            <stop offset="40%" stop-color="rgba(255, 171, 124, 1)" />
            <stop offset="100%" stop-color="rgba(255, 86, 80, 1)" />
          </linearGradient>
        </defs>
        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
      </svg>
      <p className="font-light text-base text-black">PUBLIC</p>
    </button>
  );
}

export default ButtonPostPublic;
