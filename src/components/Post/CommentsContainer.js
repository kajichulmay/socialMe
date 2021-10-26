import React from 'react';
import CommentBox from '../Post/CommentBox';

function CommentsContainer({ postId }) {
  return (
    <>
      <CommentBox postId={postId} />
    </>
  );
}

export default CommentsContainer;
