import React from 'react';
import ChatBox from '../components/myProfile/ChatBox';
import Post from '../components/Post/Post';

function NewsFeed() {
  return (
    <div className="w-full outline-black bg-white flex justify-between mt-10">
      <div className="feed-container w-3/4">
        <Post />
        <Post />

      </div>
      <ChatBox />
    </div>
  );
}

export default NewsFeed;;
