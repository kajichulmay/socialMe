import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import tempProfilePicture from '../images/nonePic.jpeg';
import addRound from '../images/Add_round.png';
import { useEffect, useState, useContext } from 'react';
import validator from 'validator';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/authContext';
import ProfilePicUi from '../components/ui/ProfilePicUi';
import { userContext } from '../context/userContext';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import Chatbox from '../components/chatbox/Chatbox';

export default function ProfileSetting() {
  const { user } = useContext(AuthContext);
  const { setUserTrigged } = useContext(userContext);
  const [editMode, setEditMode] = useState(false);
  const [validateFirstName, setValidateFirstName] = useState(' ');
  const [validateLastName, setValidateLastName] = useState(' ');
  const [validateOldPassword, setValidateOldPassword] = useState('');
  const [validateNewPassword, setValidateNewPassword] = useState('');
  const [validateConfirmNewPassword, setValidateConfirmNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [previewProfile, setPreviewProfile] = useState(null);
  const [checkOldPassword, setCheckOldPassword] = useState('');
  const [tempUser, setTempUser] = useState({});
  const history = useHistory();
  const { myuser } = useContext(userContext);

  useEffect(() => {
    const fetchUserAccount = async () => {
      const userAccont = await axios.get('/user/oneUser');
      setFirstName(userAccont.data.oneUser.firstName);
      setLastName(userAccont.data.oneUser.lastName);
      setBirthDate(userAccont.data.oneUser.birthDate);
      setBio(userAccont.data.oneUser.bio);
      setProfilePicture(userAccont.data.oneUser.profilePicture);
      setCheckOldPassword(userAccont.data.oneUser.password);
      setTempUser(userAccont.data.oneUser);
    };

    fetchUserAccount();
  }, []);

  const handleClickBackMyProfile = () => {
    history.push(`/myprofile/${myuser?.id}`);
    window.location.reload();
  };

  const handleClickSubmitProfile = async e => {
    try {
      e.preventDefault();

      // validate first name
      if (firstName.trim() === '') {
        setValidateFirstName('First name is required');
      } else if (firstName.trim() !== '') {
        setValidateFirstName(' ');
      }

      // validate last name
      if (lastName.trim() === '') {
        setValidateLastName('Last name is required');
      } else if (lastName.trim() !== '') {
        setValidateLastName(' ');
      }

      // toggle to !editMode = not null
      if (firstName.trim() !== '' && lastName.trim() !== '') {
        setEditMode(false);
      }

      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('birthDate', birthDate);
      formData.append('bio', bio);
      formData.append('picture', profilePicture);
      await axios.put(`/user/userUpdate/${user.id}`, formData);
      setUserTrigged(cur => !cur);
    } catch (err) {
      console.dir(err);
    }
  };
  console.log(firstName);

  const handleClickCancel = e => {
    setEditMode(cur => !cur);
    setPreviewProfile(null);
    setFirstName(tempUser.firstName);
    setLastName(tempUser.lastName);
    setBio(tempUser.bio);
    setBirthDate(tempUser.birthDate);
    setProfilePicture(tempUser.profilePicture);
  };

  //  RESET PASS
  const handleClickResetPassword = async e => {
    try {
      e.preventDefault();

      // validate current password

      // validate new password
      if (!password) {
        setValidateNewPassword('New password is required');
      }
      // validate confirm new password
      if (!confirmPassword) {
        setValidateConfirmNewPassword('Confirm new password is required');
      }
      if (confirmPassword !== password) {
        setValidateConfirmNewPassword('Password confirm does not match');
      }

      if (!currentPassword) {
        setValidateOldPassword('Current password is required!!');
      }

      if (
        password.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        password === confirmPassword &&
        currentPassword !== checkOldPassword
      ) {
        setValidateOldPassword('');
        setValidateNewPassword('');
        setValidateConfirmNewPassword('');

        await axios.put(`/user/password/${user.id}`, { password, confirmPassword, currentPassword });

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your password has been reset',
          showConfirmButton: false,
          timer: 100000,
        }).then(window.location.reload());
      }
    } catch (err) {
      setValidateOldPassword(err.response.data.errCurrentPassword);
      console.dir(err);
    }
  };

  const handleClickEditMode = e => {
    e.preventDefault();
    setEditMode(cur => !cur);
  };

  // change Profilepicture
  const handleChangeProfilePicture = e => {
    setProfilePicture(e.target.files[0]);
    setPreviewProfile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-full px-4 pt-16 bg-secondary mt-10">
      <div className=" max-w-xl p-5 mx-auto bg-white border-50">
        <form onSubmit={handleClickSubmitProfile}>
          <div className="flex items-center">
            {/* ============================ */}
            <label className={` ${editMode ? '  cursor-pointer ' : 'cursor-not-allowed '}`}>
              <div className="w-36 h-36 rounded-full">
                <div class="relative">
                  <ProfilePicUi
                    beforeSize="36"
                    afterSize="36"
                    className="rounded-full"
                    url={previewProfile || profilePicture}
                  />
                  <div class="absolute bottom-0 right-0">
                    <img src={addRound} id="upfile" className={`w-10 h-10 ${!editMode ? ' hidden ' : ''}`} />
                  </div>
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleChangeProfilePicture}
                disabled={!editMode ? true : false}
              />
            </label>
            {/* ========================= */}
            <div className="m-5 text-2xl font-light">
              {firstName}&nbsp;&nbsp;{lastName}
            </div>
          </div>
          <div>
            <div className="flex mt-5">
              <div className="w-1/2 mx-3">
                <div class="relative">
                  <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    readOnly={!editMode}
                    type="text"
                    className={`w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 ${
                      editMode
                        ? 'focus:outline-none focus:ring-2 focus:ring-red-400'
                        : 'cursor-not-allowed focus:outline-none'
                    }`}
                  />
                  <div class="absolute top-2 p-1 bg-white left-4 ">
                    <p className="text-red-600 text-dark text-xs font-normal">First name</p>
                  </div>
                </div>
                <p className="pl-5 text-red-600 mt-2 mb-5 text-xs">{validateFirstName}</p>
              </div>
              <div className="w-1/2 mx-3">
                <div class="relative">
                  <input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    readOnly={!editMode}
                    type="text"
                    className={`w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 ${
                      editMode
                        ? 'focus:outline-none focus:ring-2 focus:ring-red-400'
                        : 'cursor-not-allowed focus:outline-none'
                    }`}
                  />
                  <div class="absolute top-2 p-1 bg-white left-4 ">
                    <p className="text-red-600 text-dark text-xs font-normal">Last name</p>
                  </div>
                </div>
                <p className="pl-5 text-red-600 mt-2 mb-5 text-xs">{validateLastName}</p>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 mx-3 pr-6">
                <div class="relative">
                  <input
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    readOnly={!editMode}
                    type="date"
                    className={`bg-white text-dark w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 ${
                      editMode
                        ? 'bg-white focus:outline-none focus:ring-2 focus:ring-red-400'
                        : 'bg-white cursor-not-allowed focus:outline-none'
                    }`}
                  />
                  <div class="absolute top-2 p-1 bg-white left-4 ">
                    <p className="text-red-600 text-dark text-xs font-normal">Birth date</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-full mx-3">
                <div class="relative ">
                  <textarea
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    readOnly={!editMode}
                    className={`w-full h-36 border rounded-3xl border-red-400 pt-3  mt-5 shadow-lg pl-3 ${
                      editMode
                        ? 'focus:outline-none focus:ring-2 focus:ring-red-400'
                        : 'focus:outline-none  cursor-not-allowed'
                    }`}
                  />
                  <div class="absolute top-2 p-1 bg-white left-4  ">
                    <p className="text-red-600 text-dark text-xs font-normal h-">Biography</p>
                  </div>
                </div>
              </div>
            </div>

            {editMode ? (
              <div className="inputFollwer w-full flex-shrink  px-3 right relative">
                <button
                  type="button"
                  onClick={handleClickCancel}
                  className="flex-shrink rounded-full shadow-input w-20 h-8 bg-primary-grad text-white italic font-light forhover mt-5 object-right right-40 absolute"
                >
                  Cancel
                </button>
                <button className="flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white italic font-light forhover mt-5 object-right right-5 absolute">
                  Save change
                </button>
              </div>
            ) : (
              <div className="inputFollwer w-full flex-shrink  px-3 right relative">
                <button
                  type="button"
                  onClick={handleClickEditMode}
                  className="flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white italic font-light forhover mt-5 object-right right-5 absolute"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </form>
        <div>
          <div className="mt-5 p-3">
            {!myuser?.googleId && (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-auto px-4 py-2 text-xs text-left text-dark-thin font-thin ">
                      <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-red-400`} />
                      <span>Change password ?</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <form onSubmit={handleClickResetPassword} className="mt-10 mb-10 ">
                        <div className=" w-1/3">Reset your password</div>
                        <div className="w-full flex ">
                          <div className="w-1/2">
                            <div className="mx-3 mt-5">
                              <div class="relative">
                                <input
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                                  type="password"
                                  className="w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                  <p className="text-red-600 text-dark text-xs font-normal">New password</p>
                                </div>
                              </div>
                              {validateNewPassword && (
                                <p className="pl-5 text-red-600 mt-2 mb-5 text-xs">{validateNewPassword}</p>
                              )}
                            </div>
                            <div className="mx-3 mt-3">
                              <div class="relative">
                                <input
                                  value={confirmPassword}
                                  onChange={e => setConfirmPassword(e.target.value)}
                                  type="password"
                                  className="w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                  <p className="text-red-600 text-dark text-xs font-normal">Confirm new password</p>
                                </div>
                              </div>
                              <p className="pl-5 text-red-600 mt-2 mb-5 text-xs">{validateConfirmNewPassword}</p>
                            </div>
                          </div>
                          <div className="w-1/2">
                            <div className="mx-3 mt-5">
                              <div class="relative">
                                <input
                                  value={currentPassword}
                                  onChange={e => setCurrentPassword(e.target.value)}
                                  type="password"
                                  className="w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                />
                                <div class="absolute top-2 p-1 bg-white left-4 ">
                                  <p className="text-red-600 text-dark text-xs font-normal">Current password</p>
                                </div>
                              </div>
                              <p className="pl-5 text-red-600 mt-2 mb-5 text-xs">{validateOldPassword}</p>
                            </div>
                            <div className="inputFollwer w-full flex-shrink  px-3 right relative mt-4 mb-20">
                              <button className="flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white italic font-light px-5 w-auto forhover mt-5 object-right right-5 absolute">
                                Reset password
                              </button>
                              {alert}
                            </div>
                          </div>
                        </div>
                      </form>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )}
            <button
              className="flex-shrink rounded-full shadow-input w-40 h-8 bg-white hoverBtnMyProfile italic  text-black    font-light shadow-input mt-5  "
              onClick={handleClickBackMyProfile}
            >
              Back to My Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
