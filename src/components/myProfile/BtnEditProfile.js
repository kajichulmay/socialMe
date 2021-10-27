import React from 'react';
<<<<<<< HEAD
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
=======
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

>>>>>>> 95a1fc4dbfcc3106a62195a838ce8d37b619ffa6
  );
}

export default BtnEditProfile;
