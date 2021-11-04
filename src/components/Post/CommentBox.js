import React, { useEffect, useState } from 'react';
import CommentOwner from './CommentOwner';
import CommentFriends from './CommentFriends';
function CommentBox({ postId, comment, setToggleStateComment }) {
  const filterOwner = [...comment].filter(item => item.postId === postId);

  return (
    <div className="content-section mt-4 flex flex-col mx-auto px-4 ">
      {/* owner comment */}
      {filterOwner.map(item => (
        <CommentOwner
          key={item.id}
          firstName={item.commentUser.firstName}
          lastName={item.commentUser.lastName}
          time={item.updatedAt}
          profile={item.commentUser.profilePicture}
          message={item.message}
          userIdComment={item.commentUserId}
          userId={item.commentUser.id}
          id={item.id}
          setToggleStateComment={setToggleStateComment}
        />
      ))}
      {/* comment container */}
    </div>
  );
}

export default CommentBox;
