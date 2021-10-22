import React from 'react';
import imageProfile from '../../mockData/image/mockProfile.png';
import ProfilePicUi from '../ui/ProfilePicUi';
import ButtonPostEx from './ButtonPostEx';
import ButtonPostPublic from './ButtonPostPublic';
function AddPost() {
  return (
    <div className=" flex h-auto  w-full  justify-center mt-20 ">
      <div className=" w-3/4 m-8  flex  flex-col bg-white justify-start rounded-2xl shadow-container relative ">
        {/* imageProfile */}
        <div className=" absolute -top-16 -left-16  rounded-full  shadow-container">
          <ProfilePicUi
            afterSize="36"
            beforeSize="36"
            url="https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg"
          />
        </div>
        {/* NameUser */}
        <div className="boxText flex justify-between items-center ml-20 mb-3 w-auto  ">
          <div className="nameTitle">
            <p className="text-2xl ml-10 font-normal">Jenny Wilson</p>
          </div>
          {/* ButtonPublic or PostEx */}
          <ButtonPostPublic />
          {/* <ButtonPostEx /> */}
        </div>
        {/* Content Add Post */}
        <div className="boxText flex justify-between items-center ml-24 mb-3 w-auto  h-full">
          <div className="ml-5  width100 ">
            <textarea
              className="textInput  w-11/12  h-28 border-2 rounded-3xl border-red-400 pt-3  shadow-lg pl-3 focus:outline-none focus:ring-1 focus:ring-red-400 placeholder-gray-500 placeholder-opacity-75"
              placeholder="what on your mind..."
            />
          </div>
        </div>
        <div className="boxText flex justify-between items-center ml-24 mb-5 w-auto  h-full ">
          <div className="ml-5  w-11/12 flex justify-between cursor-pointer  ">
            {/* Button Add Photo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 icon-grad  " viewBox="0 0 20 20">
              <defs>
                <linearGradient id="iconGrad" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(255, 233, 155, 1)" />
                  <stop offset="40%" stop-color="rgba(255, 171, 124, 1)" />
                  <stop offset="100%" stop-color="rgba(255, 86, 80, 1)" />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            {/* Button Send Post */}
            <button className="rounded-full shadow-input w-24 h-12 bg-primary-grad forhover flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 transform rotate-90 "
                viewBox="0 0 20 20"
                fill="#FFFF"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
