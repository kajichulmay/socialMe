import React from 'react';
import ChatBox from '../myProfile/ChatBox';
import portrait from '../../images/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg';
import DropdownEditdelete from '../dropdown/DropdownEditdelete';
import SimpleSlider from './SimpleSlider';
import CommentBox from './CommentBox';
import InputAddComment from './InputAddComment';
import ButtonPurchase from './ButtonPurchase';
import ProfilePicUi from '../ui/ProfilePicUi';

function Post() {
  return (
    <div
      className=" w-4/5 mx-auto relative
    my-20 py-6  shadow-container rounded-3xl "
    >
      {/* post section */}
      <div className="post-section">
        {/* display profile */}
        <div class="absolute -left-8 -top-8 w-24 h-24">
          {/* <img src={portrait} className="rounded-full shadow-input" /> */}
          <ProfilePicUi
            w="24"
            h="24"
            url="https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg"
          />
        </div>
        <button className="absolute right-5 top-3">
          <DropdownEditdelete />
        </button>

        {/* name and date */}
        <div className="pl-20">
          <p className="text-xl">Firstname Lastname</p>
          <p className="text-sm text-gray-500">10/28/2020 14:38pm</p>
        </div>

        {/* content post */}
        <div className=" py-4">
          <p className="px-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          {/* picturePost */}
          <SimpleSlider />
        </div>

        <div className="flex px-6 mt-2 mb-4">
          <div className="flex mr-4 items-center">
            {/* display recomment */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-8 w-8 mr-2 text-red-400"
              viewBox="0 0 20 20"
            >
              {/* linear gradient for icon */}
              {/* <defs>
              <linearGradient id="iconGrad" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(255, 233, 155, 1)" />
                <stop offset="40%" stop-color="rgba(255, 171, 124, 1)" />
                <stop offset="100%" stop-color="rgba(255, 86, 80, 1)" />
              </linearGradient>
            </defs> */}
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-dark">145 recommend</p>
          </div>
          {/* display comment */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8 mr-2 text-blue-400"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-dark">12 comment</p>
          </div>
        </div>
      </div>
      {/*end  post section */}

      <div className="h-0.5 bg-gray-300  rounded-3xl"></div>
      {/* comment section */}
      {/* <CommentBox /> */}

      {/* button to Purchase */}
      <ButtonPurchase />
      {/*end comment section */}
      {/* <InputAddComment /> */}
    </div>
  );
}

export default Post;
