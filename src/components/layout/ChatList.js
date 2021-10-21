import React from 'react';
import portrait from '../../images/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg';

function ChatList() {
  return (
    <div className="flex items-center m-6">
      <div class=" w-12 h-12 mr-6">
        <img src={portrait} className="rounded-full shadow-input" />
      </div>
      <p>Firstname Lastname</p>
    </div>
  );
}

export default ChatList;
