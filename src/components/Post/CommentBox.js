import React, { useEffect, useState } from 'react';
import portrait from '../../images/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg';
import ProfilePicUi from '../ui/ProfilePicUi';
import { timeStampDisplay } from '../../service/dateService';
import axios from '../../config/axios';
import { useParams } from 'react-router-dom';
import CommentOwner from './CommentOwner';
import CommentFriends from './CommentFriends';
function CommentBox({ postId, comment }) {
  const filterOwner = [...comment].filter(item => item.postId === postId);

  return (
    <div className="content-section mt-4 flex flex-col mx-auto px-4 ">
      {/* owner comment */}
      {filterOwner.map(item => (
        <CommentOwner
          key={item.id}
          firstName={item.commentUser.firstName}
          lastName={item.commentUser.lastName}
          timeCreate={item.createdAt}
          profile={item.commentUser.profilePicture}
          message={item.message}
          userIdComment={item.commentUserId}
          userId={item.commentUser.id}
        />
      ))}
      {/* comment container */}
    </div>
  );
}

export default CommentBox;
