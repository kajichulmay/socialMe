import React, { useContext, useState } from 'react';
import imageProfile from '../../mockData/image/mockProfile.png';
import photoIcon from '../../images/photoIcon.png';
import ProfilePicUi from '../ui/ProfilePicUi';
import BtnTogglePostType from './BtnTogglePostType';
import { PostContext } from '../../context/postContext';
import { AuthContext } from '../../context/authContext';

function AddPost({ oneUser }) {
  const { user } = useContext(AuthContext);
  const { hdlSubmitCreatePost, newPostInput, setNewPostInput } = useContext(PostContext);

  const hdlChangeMessageInput = e => {
    setNewPostInput(cur => ({ ...cur, message: e.target.value }));
  };

  return (
    <div className=" flex  justify-center w-full mt-20 mb-8">
      <div
        className="pt-4 pb-6 w-3/4 flex flex-col bg-white justify-center
      rounded-2xl shadow-container relative"
      >
        {/* imageProfile */}
        <div className="absolute md:-top-14 md:-left-10 -top-10 -left-8 rounded-full  shadow-container">
          {oneUser?.profilePicture ? (
            <ProfilePicUi afterSize="28" beforeSize="32" url={oneUser?.profilePicture} />
          ) : (
            <ProfilePicUi
              afterSize="28"
              beforeSize="32"
              url="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
            />
          )}
        </div>

        {/* name and publicBtn top sector */}
        <div
          className=" flex justify-between
        items-end mb-5 mx-auto w-11/12"
        >
          <div className="">
            <p className="text-2xl pl-20 font-normal capitalize">{`${oneUser?.firstName} ${oneUser?.lastName}`}</p>
          </div>

          {/* ButtonPublic or Exclusive*/}
          <BtnTogglePostType setNewPostInput={setNewPostInput} newPostInput={newPostInput} />
        </div>
        {/* Content Add Post */}
        <div
          className="flex justify-between items-center
        mx-auto mb-4 w-10/12"
        >
          <textarea
            className="textInput w-full h-36 border rounded-3xl border-red-400 pt-3  shadow-lg pl-3
              focus:outline-none focus:ring-1 focus:ring-red-400 placeholder-gray-500
              placeholder-opacity-75"
            value={newPostInput.message}
            onChange={e => hdlChangeMessageInput(e)}
            placeholder="what on your mind..."
          />
        </div>

        {/* bottom btn sector */}
        <div
          className="flex justify-between
        items-center  mx-auto w-11/12"
        >
          {/* Button Add Photo */}
          <div className="cursor-pointer">
            <img src={photoIcon} />
          </div>

          {/* Button Send Post */}
          <button
            onClick={() => hdlSubmitCreatePost(newPostInput)}
            className="rounded-full shadow-input px-8 py-1 bg-primary-grad forhover flex items-center "
          >
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
