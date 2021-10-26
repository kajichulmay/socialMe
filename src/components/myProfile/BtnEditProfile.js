import React from 'react';
import { useHistory } from 'react-router-dom';

function BtnEditProfile() {
  const history = useHistory();
  const handleClickEditProfile = () => {
    history.push('/profile-setting');
  };

  return (
    <div className="ml-5 text-black rounded-full ">
      <button
        onClick={handleClickEditProfile}
        className={`rounded-full shadow-input px-3 py-2 flex justify-center items-center 

        `}
      >
        Edit Profile
      </button>
    </div>
  );
}

export default BtnEditProfile;
