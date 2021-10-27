import React from 'react';
import { useHistory } from 'react-router-dom';
import editIcon from '../../images/settingIcon.png';

function BtnEditProfile() {
  const history = useHistory();
  const handleClickEditProfile = () => {
    history.push('/profile-setting');
  };

  return (
    <button
      onClick={handleClickEditProfile}
      className={`bg-white rounded-full shadow-input px-3 py-2
        flex justify-center  whiteBtnHover
        `}
    >
      Edit Profile
      <img src={editIcon} className="ml-1" />
    </button>
  );
}

export default BtnEditProfile;;
