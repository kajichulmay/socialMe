import React, { useContext } from 'react';
import ProfilePicUi from '../ui/ProfilePicUi';
import mockFriendsChat from './../../mockData/image/mockFriendsChat.png';
import { DarkContext } from '../../context/DarkContext';

function FirendsList({ firstName, lastName, profilePicture, idFriend }) {
  const { dark } = useContext(DarkContext);
  return (
    <div
      className={`${dark ? 'text-white' : ''} my-2 w-10/12 flex
    items-center cursor-pointer  mb-2`}
    >
      <ProfilePicUi beforeSize="16" afterSize="16" url={profilePicture} id={idFriend} />
      {/* <img src={mockFriendsChat} className="mr-5" /> */}
      <span className="font-light text-lg ml-5 capitalize">
        {firstName} {lastName}
      </span>
    </div>
  );
}

export default FirendsList;
