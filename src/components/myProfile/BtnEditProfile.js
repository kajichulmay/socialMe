import React from 'react';
import { useHistory } from 'react-router-dom';

function BtnEditProfile() {
  const history = useHistory();
  const handleClickEditProfile = () => {
    history.push('/profile-setting');
  };

  return (
    <button
      onClick={handleClickEditProfile}
      className={`bg-white rounded-full shadow-input px-3 py-2
        flex justify-center items-center 
        `}
    >
      Edit Profile
    </button>
  );
}

export default BtnEditProfile;
