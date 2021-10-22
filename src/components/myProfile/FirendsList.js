import React from 'react';
import ProfilePicUi from '../ui/ProfilePicUi';
import mockFriendsChat from './../../mockData/image/mockFriendsChat.png';
function FirendsList() {
  return (
    <div
      className="my-2 w-10/12 flex
    items-center cursor-pointer  mb-2"
    >
      <ProfilePicUi
        beforeSize="16"
        afterSize="16"
        url="https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg"
      />
      {/* <img src={mockFriendsChat} className="mr-5" /> */}
      <span className="font-light text-lg ml-5">Cody Fisher</span>
    </div>
  );
}

export default FirendsList;
