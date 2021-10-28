import axios from '../../config/axios';
import React, { useContext, useEffect, useState } from 'react';
import ChatList from '../layout/ChatList';
import FirendsList from '../myProfile/FirendsList';
import { userContext } from '../../context/userContext';

function ChatBox() {
  const { setToggleFollwer, toggleFollwer } = useContext(userContext);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchAllFriends = async () => {
      const allFriends = await axios.get('/follow/getAllFollow');
      setFriends(allFriends?.data?.allFollow);
    };
    fetchAllFriends();
  }, [toggleFollwer]);

  // console.log(`friends`, friends);
  return (
    <div class="lg:w-1/4 lg:block hidden bg-chat-container">
      <div className=" mt-24 text-center ">
        <p className="capitalize text-2xl font-thin mb-5"> your friends</p>
      </div>
      <div class="h-5/6 overflow-y-scroll">
        <div class="flex flex-col items-center">
          {friends.map(item => (
            <FirendsList
              key={item.id}
              firstName={item.followera.firstName}
              lastName={item.followera.lastName}
              profilePicture={item.followera.profilePicture}
              idFriend={item.followera.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
