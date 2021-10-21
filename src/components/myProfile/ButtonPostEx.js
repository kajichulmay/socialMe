import React from 'react';

function ButtonPostEx() {
  return (
    <button className="bg-white border-opacity-30  box-border border-yellow-400 py-2 px-3 m-2 rounded-full flex justify-between items-center  shadow-input forHoverButtonPost  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mb-2 mr-5 icon-grad"
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
        <path
          fill-rule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clip-rule="evenodd"
        />
      </svg>
      <p className="font-light text-base text-black">PRIVATE</p>
    </button>
  );
}

export default ButtonPostEx;
