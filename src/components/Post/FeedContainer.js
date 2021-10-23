import React from 'react';
import Post from '../Post/Post';
import MOCK_POST from '../../mockData/MOCK_POST_DATA';

function FeedContainer() {
  const listPost = MOCK_POST.map((item, idx) =>
    <Post key={idx} data={item} />
  );
  return (
    <div>
      {listPost}
    </div>
  );
}

export default FeedContainer;
