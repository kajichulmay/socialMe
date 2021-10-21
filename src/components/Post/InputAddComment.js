import React from 'react';
import portrait from '../../images/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg';
function InputAddComment() {
  return (
    <>
      {/*input comment section */}
      <div className=" mt-4 w-11/12 flex mx-auto  items-center">
        <div class=" w-12 h-12 mr-2">
          <img src={portrait} className="rounded-full" />
        </div>
        <div className="w-full relative">
          <input
            type="text"
            className="border w-full rounded-full border-red-400 shadow-input pl-5 p-1
          focus:outline-none focus:ring-2 focus:ring-red-400 animate-pulse "
            placeholder="Write a  comment..."
          />
          <button className="absolute right-0 h-full bg-primary-grad forhover text-white rounded-full shadow-lgm-auto px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform rotate-90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default InputAddComment;
