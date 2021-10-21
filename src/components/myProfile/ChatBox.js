import React from 'react';
import ChatList from '../layout/ChatList';


function ChatBox() {
  return (
    <div className=" w-1/4 bg-chat-container flex
    border-2 border-green-500 h-screen">
      {/* fixed */}
      <div className="fixed border-2 border-red-500">
        <p className="mt-12 outline-black text-center">chat with your friend</p>
        {/* friendLIst */}
        <div className="mt-6 outline-black ">
          {/* <div className="flex flex-col  justify-center"> */}
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />


          {/* </div> */}
        </div>
        {/*end friendLIst */}

      </div>
      {/* fixed */}


      {/* <div className="bg-primary-grad px-1 pt-1 h-1/4 rounded-t-xl fixed bottom-0">
        <div className="bg-white rounded-t-xl h-full p-4">
          <p>This is chatbox</p>
        </div>
      </div> */}


    </div >
  );
}

export default ChatBox;
