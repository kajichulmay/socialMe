import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import Post from '../Post/Post';
import { PostContext } from '../../context/postContext';

// import MOCK_POST from '../../mockData/MOCK_POST_DATA';

function FeedContainer({ allmypost, setToggleUpdatePost }) {
  const { refreshFeed } = useContext(PostContext);
  const [postList, setPostList] = useState([]);
  const postLates = allmypost.sort((a, b) => b.id - a.id);

  const showList = postLates.map((item, idx) => (
    <Post key={idx} data={item} setToggleUpdatePost={setToggleUpdatePost} />
  ));

  return <div>{showList}</div>;
}

export default FeedContainer;
