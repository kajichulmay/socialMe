import React, { useEffect } from 'react';

import ChatBox from '../components/myProfile/ChatBox';
import MyProfile from './MyProfile';
import axios from '../config/axios';

function LayoutWithChat() {
  useEffect(() => {
    const fetchAllFriends = async () => {
      const allFriends = axios.get('/follow/');
    };
  }, []);
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
