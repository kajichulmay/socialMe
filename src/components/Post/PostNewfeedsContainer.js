import React from 'react';
import { useEffect, useState, useContext } from 'react';
import Post from '../Post/Post';

function PostNewfeedsContainer({ allPost, setToggleUpdatePost }) {
  // const showList = postLates.map((item, idx) => (
  //   <Post key={idx} data={item} setToggleUpdatePost={setToggleUpdatePost} />
  // ));
  <Post />;
  return (
    <div>
      {allPost.map(item => (
        <Post key={item.id} data={item} setToggleUpdatePost={setToggleUpdatePost} />
      ))}
    </div>
  );
}

export default PostNewfeedsContainer;
