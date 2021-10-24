import React from 'react';
import imageProfile from '../../mockData/image/mockProfile.png';
import ProfilePicUi from '../ui/ProfilePicUi';
import BtnTogglePostType from './BtnTogglePostType';
import ButtonPostEx from './ButtonPostEx';
import ButtonPostPublic from './ButtonPostPublic';
function AddPost() {
  return (
    <div className=" flex  justify-center w-full mt-20 mb-8">
      <div className="pt-4 pb-6 w-3/4 flex flex-col bg-white justify-center
      rounded-2xl shadow-container relative">
        {/* imageProfile */}
        <div className="absolute md:-top-14 md:-left-10 -top-10 -left-8 rounded-full  shadow-container">
          <ProfilePicUi
            afterSize="28"
            beforeSize="32"
            url="https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg"
          />
        </div>

        {/* name and publicBtn top sector */}
        <div className=" flex justify-between
        items-end mb-5 mx-auto w-11/12">
          <div className="">
            <p className="text-2xl pl-20 font-normal">Jenny Wilson</p>
          </div>

          {/* ButtonPublic or Exclusive*/}
          {/* <ButtonPostPublic /> */}
          <BtnTogglePostType />
          {/* <ButtonPostEx /> */}
          {/* <ButtonPostEx /> */}

        </div>
        {/* Content Add Post */}
        <div className="flex justify-between items-center
        mx-auto mb-5 w-10/12">
          <textarea
            className="textInput w-full h-36 border rounded-3xl border-red-400 pt-3  shadow-lg pl-3
              focus:outline-none focus:ring-1 focus:ring-red-400 placeholder-gray-500
              placeholder-opacity-75"
            placeholder="what on your mind..."
          />

        </div>

        {/* bottom btn sector */}
        <div className=" flex justify-between
        items-center  mx-auto w-11/12">
          {/* Button Add Photo */}
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 icon-grad "
            viewBox="0 0 20 20">
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
          <button className="rounded-full shadow-input px-8 py-1 bg-primary-grad forhover flex items-center ">
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
        {/*end bottom btn sector */}
      </div>
    </div>
  );
}

export default AddPost;
