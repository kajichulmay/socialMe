import React from 'react';

function Chatbox() {
  return (
    <div className="bg-primary-grad p-0.5 w-1/5 h-3/6 absolute pb-0 bottom-0  right-40 z-20 overflow-y-auto overflow-x-hidden">
      <div className="p-3 bg-secondary h-auto  relative mb-0 ">
        <div className="flex bg-secondary rounded-t-3xl items-center ">
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
        <div className="flex flex-col w-full bg-secondary">
          <p className="mx-1 shadow-md rounded-3xl p-3 mt-4 break-words bg-secondary">Hi How are you? doing so far?</p>
          <p className="text-gray-400 text-sm m-1">10/28/12 01:55pm</p>
        </div>
        <div className="flex items-end flex-col w-full bg-secondary">
          <p className="text-white mx-1 shadow-md rounded-3xl p-3 mt-4 break-words bg-primary-grad">
            Hi How are you? doing so far?
          </p>
          <p className="text-gray-400 text-sm m-1">10/28/12 01:55pm</p>
        </div>
        <div className="flex flex-col w-full bg-secondary">
          <p className="mx-1 shadow-md rounded-3xl p-3 mt-4 break-words bg-secondary">Hi How are you? doing so far?</p>
          <p className="text-gray-400 text-sm m-1">10/28/12 01:55pm</p>
        </div>
        <div className="flex items-end flex-col w-full bg-secondary">
          <p className="text-white mx-1 shadow-md rounded-3xl p-3 mt-4 break-words bg-primary-grad">
            Hi How are you? doing so far?
          </p>
          <p className="text-gray-400 text-sm m-1">10/28/12 01:55pm</p>
        </div>
        <div className="flex flex-col w-full bg-secondary">
          <p className="mx-1 shadow-md rounded-3xl p-3 mt-4 break-words bg-secondary">Hi How are you? doing so far?</p>
          <p className="text-gray-400 text-sm m-1">10/28/12 01:55pm</p>
        </div>
        <div className="flex items-end flex-col w-full bg-secondary">
          <p className="text-white mx-1 shadow-md rounded-3xl p-3 mt-4 break-words bg-primary-grad">
            Hi How are you? doing so far?
          </p>
          <p className="text-gray-400 text-sm m-1">10/28/12 01:55pm</p>
        </div>
        <div className="w-full mt-24 mb-0 pb-0 absolute bottom-0 sticky h-auto bg-secondary">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className=" focus:outline-none bg-secondary mb-0 textarea-none bg-yellow-500 w-full h-auto mb-b pp-b h-10"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
