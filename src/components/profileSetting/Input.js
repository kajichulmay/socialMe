import React from 'react';

function Input() {
  return (
    <div class="relative">
      <input
        type="text"
        className=" w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <div class="absolute top-2 p-1 bg-white left-4 ">
        <p className="text-red-600 text-dark text-xs font-normal">First name</p>
      </div>
    </div>
  );
}

export default Input;
