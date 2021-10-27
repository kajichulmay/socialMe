import React from 'react';

function Chatbox() {
  return (
    <div className="bg-primary-grad p-0.5 w-1/5 h-3/6 absolute bottom-0  right-40 z-20 overflow-y-auto overflow-x-hidden outline-black">
      <div className="bg-white p-3 bg-secondary h-full">
        <div className="flex bg-secondary rounded-t-3xl items-center">
          <div
            className="w-16 h-16 rounded-full mr-6"
            style={{
              backgroundImage:
                'url("https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <p className="text-lg">Rose Blackpink</p>
        </div>
        <hr className="mt-3" />
        <div className="flex flex-col w-full">
          <p className="bg-white shadow-md rounded-3xl p-3 mt-4 break-words">Hi How are you?</p>
          <p className="text-gray-400 text-sm m-1">10/28/12 01:55pm</p>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
