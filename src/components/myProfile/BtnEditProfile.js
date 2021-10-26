import React from 'react';
import { NavLink } from 'react-router-dom';

function BtnEditProfile() {
  return (
    <div className="ml-5 text-black rounded-full ">
      <NavLink to="/profile-setting">
        <button
          className={`rounded-full shadow-input px-3 py-2 flex justify-center items-center 

        `}
        >
          Edit Profile
        </button>
      </NavLink>
    </div>
  );
}

export default BtnEditProfile;
