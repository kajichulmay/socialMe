import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import { timeStampDisplay } from '../../service/dateService';
import DropDownEditDeleteComment from '../dropdown/DropDownEditDeleteComment';
import ProfilePicUi from '../ui/ProfilePicUi';
import FormEditComment from './FormEditComment';

function CommentOwner({ firstName, lastName, time, profile, message, userIdComment, id, setToggleStateComment }) {
  const { myuser } = useContext(userContext);
  const [isEditComment, setIsEditComment] = useState(false);

  return (
    <>
      <div
        className={`${
          userIdComment === +myuser?.id
            ? 'lg:mx-8 mx-6 lg:w-3/4 mt-4 mb-8 lg:self-end'
            : 'lg:mx-8 mx-6 lg:w-3/4 mt-4 mb-8'
        }`}
      >
        <div
          className={`${userIdComment === +myuser?.id ? 'flex items-center' : 'pl-16 flex justify-end items-center'}`}
        >
          <p className="mr-2 text-lg">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-gray-500">{timeStampDisplay(time)}</p>
          {myuser?.id === userIdComment && (
            <DropDownEditDeleteComment
              myuser={myuser}
              commentId={id}
              setToggleStateComment={setToggleStateComment}
              setIsEditComment={setIsEditComment}
            />
          )}
        </div>
        <div className="bg-white relative py-6 px-14 shadow-container rounded-3xl ">
          <div
            class={`${
              userIdComment === +myuser?.id ? 'absolute -right-8 -top-8 w-20 h-20' : 'absolute -left-8 -top-8'
            }`}
          >
            <ProfilePicUi beforeSize="16" afterSize="16" url={profile} id={userIdComment} />
          </div>

          <div className="comment-container break-words ">
            {isEditComment === true ? (
              <FormEditComment
                setIsEditComment={setIsEditComment}
                message={message}
                id={id}
                setToggleStateComment={setToggleStateComment}
              />
            ) : (
              <div>
                <p>{message}</p>
                <img src="../../images/mockPicPost.png" alt="" />
              </div>
            )}

            {/* end owner comment */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentOwner;
