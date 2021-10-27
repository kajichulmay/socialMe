import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DarkContext } from '../../context/DarkContext';

function BtnEditProfile() {
  const { dark } = useContext(DarkContext);
  const history = useHistory();
  const handleClickEditProfile = () => {
    history.push('/profile-setting');
  };

  return (
    <button
      onClick={handleClickEditProfile}
      className={`${dark ? 'dark-bg' : 'bg-white'} rounded-full shadow-input px-3 py-2
        flex justify-center items-center`}
    >
      Edit Profile
    </button>
  );
}

export default BtnEditProfile;
