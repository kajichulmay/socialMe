import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DarkContext } from '../../context/DarkContext';
import editIcon from '../../images/settingIcon.png';


function BtnEditProfile() {
  const { dark } = useContext(DarkContext);

  const history = useHistory();
  const handleClickEditProfile = () => {
    history.push('/profile-setting');
  };

  return (
    <button
      onClick={handleClickEditProfile}
      className={`${dark ? 'dark-bg3' : 'bg-white'} rounded-full shadow-input px-3 py-2
        flex justify-center items-center`}
    >
      Edit Profile
      <img src={editIcon} className="ml-1" />
    </button>
  );
}

export default BtnEditProfile;
