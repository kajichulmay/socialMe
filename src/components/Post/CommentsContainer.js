import React from 'react';
import CommentBox from '../Post/CommentBox';

function CommentsContainer({ comment }) {
  return (
    <>
      <CommentBox comment={comment} />
    </>
  );
}

export default CommentsContainer;
