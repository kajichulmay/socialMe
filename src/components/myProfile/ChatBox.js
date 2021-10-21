import React from 'react';
import FirendsList from './FirendsList';

function ChatBox() {
  return (
    <div className="w-1/4 heigt100 bg-gray-200 flex flex-col justify-start items-center ">
      <div className="fixed outline-black w-1/6 flex flex-col items-center h-full ">
        <div className="mt-10  text-gray-500 text-xl font-light">Chat With Your Friends</div>
        <FirendsList />
        <FirendsList />
        <FirendsList />
        <FirendsList />
      </div>
    </div>
  );
}

export default ChatBox;
