import React from 'react';
import mockFriendsChat from './../../mockData/image/mockFriendsChat.png';
function FirendsList() {
  return (
    <div className="my-2 w-10/12 flex
    items-center cursor-pointer  mb-2">
      <img src={mockFriendsChat} className="mr-5" />
      <span className="font-light text-lg">Cody Fisher</span>
    </div>
  );
}

export default FirendsList;
