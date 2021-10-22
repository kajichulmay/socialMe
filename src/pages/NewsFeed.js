import React from 'react';
import ChatBox from '../components/myProfile/ChatBox';
import Post from '../components/Post/Post';
import MOCK_POST from '../mockData/MOCK_POST_DATA';

function NewsFeed() {
  const listPost = MOCK_POST.map((item, idx) =>
    <Post key={idx} data={item} />
  );

  return (
    <div>
      {listPost}
      {/* <Post /> */}
    </div>
  );
}

export default NewsFeed;;
