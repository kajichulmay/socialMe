import React from 'react';
import CommentBox from '../Post/CommentBox';

function CommentsContainer({ postId, comment }) {
  return (
    <>
      <CommentBox postId={postId} comment={comment} />
    </>
  );
}

export default CommentsContainer;
