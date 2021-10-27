import React from 'react';
import { timeStampDisplay } from '../../service/dateService';

import ProfilePicUi from '../ui/ProfilePicUi';

function CommentFriends({ firstName, lastName, timeCreate, profile, message }) {
  return (
    <div className="content-section mt-4 flex flex-col  px-4">
      {/* comment */}
      <div className="lg:mx-8 mx-6 lg:w-3/4 mt-4 mb-8">
        <div className="pl-16 flex justify-end items-center">
          <p className="mr-2 text-lg">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-gray-500">{timeStampDisplay(timeCreate)}</p>
        </div>
        <div className="relative py-6 px-14 shadow-container rounded-3xl ">
          <div class="absolute -left-8 -top-8">
            <ProfilePicUi beforeSize="20" afterSize="20" url={profile} />
          </div>

          {/* name and date */}
          <div className="comment-container break-words">
            {/* content post */}
            <div>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentFriends;
