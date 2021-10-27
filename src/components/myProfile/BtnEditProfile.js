import React from 'react';
import { NavLink } from 'react-router-dom';
import settingIcon from '../../images/settingIcon.png';

function BtnEditProfile() {



  return (

    <NavLink to="/profile-setting">
      <button
        className="bg-white rounded-full shadow-input px-3 py-2
        flex justify-center items-center
        "
      >
        Edit Profile
        <img src={settingIcon} alt="setting-profile-icon" className="ml-1" />
      </button>
    </NavLink>

  );
}

export default BtnEditProfile;
