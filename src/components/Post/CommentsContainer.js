import React from 'react';
import CommentBox from '../Post/CommentBox';

function CommentsContainer({ postId, comment, setToggleStateComment }) {
  return (
    <>
      <CommentBox postId={postId} comment={comment} setToggleStateComment={setToggleStateComment} />
    </>
  );
}

export default CommentsContainer;
