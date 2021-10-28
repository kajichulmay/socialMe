import React, { useContext } from 'react';
import ChatList from '../layout/ChatList';
import FirendsList from '../myProfile/FirendsList';
import { DarkContext } from '../../context/DarkContext';

function ChatBox() {
  const { dark } = useContext(DarkContext);

  return (
    <div class={`lg:w-1/4 lg:block hidden bg-chat-container ${dark ? 'dark-bg2' : ''}`}>
      <div className=" mt-24 text-center ">
        <p className={`capitalize text-2xl font-thin mb-5 ${dark ? 'dark-bg2' : 'text-black'}`}>
          chat with your friends
        </p>
      </div>
      <div class={`h-5/6 overflow-y-scroll ${dark ? 'dark-bg2' : ''}`}>
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
