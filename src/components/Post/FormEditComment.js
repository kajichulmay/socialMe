import axios from '../../config/axios';
import React, { useState } from 'react';
import ProfilePicUi from '../ui/ProfilePicUi';

function FormEditComment({ setIsEditComment, message, id, setToggleStateComment }) {
  const [newMessage, setNewMessage] = useState(message);

  const handleClickCanleEditComment = () => {
    setIsEditComment(cur => !cur);
  };

  const handleClickSaveEditComment = async () => {
    await axios.put(`/comment/edit/${id}`, { message: newMessage });
    setIsEditComment(cur => !cur);
    setToggleStateComment(cur => !cur);
  };
  return (
    <div className=" mt-4 w-11/12 flex mx-auto w-full items-center">
      <div class="mr-2">
        {/* <ProfilePicUi url={userComment?.profilePicture} afterSize={12} beforeSize={12} id={userComment?.id} /> */}
      </div>
      <div className="w-full relative">
        <input
          type="text"
          className="border w-full rounded-full border-red-400 shadow-input pl-5 p-1
          focus:outline-none focus:ring-2 focus:ring--300 animate-pulse "
          placeholder="Write a  comment..."
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />

        <button
          className="absolute right-0 h-full forhover
          bg-primary-grad forhover rounded-full shadow-lgm-auto px-6"
          onClick={handleClickSaveEditComment}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform rotate-90 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
      <button className="italic mt-3 ml-3" onClick={handleClickCanleEditComment}>
        Cancle
      </button>
    </div>
  );
}

export default FormEditComment;
