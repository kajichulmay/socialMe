import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NewsFeed from './NewsFeed';
import ChatBox from '../components/myProfile/ChatBox';
import MyProfile from './MyProfile';

function LayoutWithChat() {
  const { path, url } = useRouteMatch();

  return (
    <div className="w-full lg:flex justify-center h-screen ">
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden ">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="p-8 mt-10"></div>
        </div>
        {/* <!-- Fixed sidebar --> */}
        <ChatBox />
      </div>
    </div>
  );
}

export default LayoutWithChat;
