import React from 'react';
import ChatBox from '../components/myProfile/ChatBox';
import AddPost from '../components/myProfile/AddPost';
import Line from '../components/myProfile/Line';
import FeedContainer from '../components/Post/FeedContainer';

function NewsFeed() {
  return (
    <div className="w-full lg:flex justify-center h-screen ">
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden ">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="py-8 lg:px-8 px-0 mt-10">
            {/* feed container */}
            <Line title="EIEI" />
            <AddPost />
            <Line title="news feed" />
            <FeedContainer />
            {/*news feed container */}
          </div>
        </div>
        {/* <!-- Fixed sidebar --> */}
        <ChatBox />
      </div>
    </div>
  );
}

export default NewsFeed;
