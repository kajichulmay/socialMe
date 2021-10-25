import React, { useState } from 'react';
import lockIcon from '../../images/lockIcon.png';
import unlockIcon from '../../images/unlockIcon.png';

function BtnTogglePostType(props) {
  const { newPostInput, setNewPostInput } = props;
  // const [postType, setPostType] = useState('public');

  const hdlToggleType = () => {
    setNewPostInput(cur => ({
      ...cur, status: cur.status === 'public' ? 'private' : 'public'
    }));
  };

  return (
    <button
      onClick={hdlToggleType}
      className="bg-white
    border-yellow-400 px-3 w-28 rounded-full flex
    justify-between shadow-input py-2">
      <img src={newPostInput.status === 'public' ? unlockIcon : lockIcon} alt="lock icon" />
      <p className="ml-1 font-light uppercase text-base text-black">
        {newPostInput.status}
      </p>
    </button>
  );
}

export default BtnTogglePostType;
