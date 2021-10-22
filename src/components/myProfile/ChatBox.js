import React from 'react';
import ChatList from '../layout/ChatList';
import FirendsList from '../myProfile/FirendsList';


function ChatBox() {
  return (
    <div class="lg:w-1/4 lg:block hidden bg-chat-container">
      <div className=" mt-24 text-center ">
        <p className="capitalize text-2xl">chat with your friends</p>
      </div>
      <div class="h-5/6 overflow-y-scroll">
        <div class="flex flex-col items-center">
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
          <FirendsList />
        </div>
      </div>

    </div>
  );
}

export default ChatBox;
