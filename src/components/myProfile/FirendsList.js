import React from 'react';
import mockFriendsChat from './../../mockData/image/mockFriendsChat.png';
function FirendsList() {
  return (
    <div className="mt-5 w-10/12 flex justify-start outline-black items-center cursor-pointer  mb-2">
      <img src={mockFriendsChat} className="mr-5" />
      <span className="font-light ">Cody Fisher</span>
    </div>
  );
}

export default FirendsList;
