import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NewsFeed from './NewsFeed';
import ChatBox from '../components/myProfile/ChatBox';
import MyProfile from './MyProfile';

function LayoutWithChat() {
  const { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);
  return (
    <div className="w-full lg:flex  h-screen">
      {/* <!-- Scroll wrapper --> */}
      <div class="lg:w-3/4 flex overflow-hidden">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="p-8 mt-10">
            <MyProfile />
            <NewsFeed />
          </div>
        </div>
      </div>
      {/* <!-- Fixed sidebar --> */}
      <ChatBox />
    </div>
  );
}

export default LayoutWithChat;
