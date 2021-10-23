import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import tempProfileHeader from '../../mockData/images/tempProfileHeader.png';
import addRound from '../../images/Add_round.png';
import { useEffect, useState } from 'react';
import validator from 'validator';
import Swal from 'sweetalert2';

export default function ProfileSetting() {
  const [editMode, setEditMode] = useState(false);
  const [validateFirstName, setValidateFirstName] = useState(' ');
  const [validateLastName, setValidateLastName] = useState(' ');
  const [validateEmail, setValidateEmail] = useState(' ');
  const [validateOldPassword, setValidateOldPassword] = useState('');
  const [validateNewPassword, setValidateNewPassword] = useState('');
  const [validateConfirmNewPassword, setValidateConfirmNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleClickSubmitProfile = e => {
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

      // validate email
      if (email.trim() === '') {
        setValidateEmail('Email is required');
      } else if (!validator.isEmail(email)) {
        setValidateEmail('Invalid Email format');
      } else if (email.trim() !== '') {
        setValidateEmail(' ');
      }

      // toggle to !editMode = not null
      if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && validator.isEmail(email)) {
        setEditMode(false);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickCancel = e => {
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

    // validate email
    if (email.trim() === '') {
      setValidateEmail('Email is required');
    } else if (!validator.isEmail(email)) {
      setValidateEmail('Invalid Email format');
    } else if (email.trim() !== '') {
      setValidateEmail(' ');
    }

    // toggle to !editMode = not null
    if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && validator.isEmail(email)) {
      setEditMode(false);
    }
  };

  const handleClickResetPassword = e => {
    e.preventDefault();

    // validate current password
    if (!oldPassword) {
      setValidateOldPassword('Current password is required');
    } else {
      setValidateOldPassword('');
    }

    // validate new password
    if (!newPassword) {
      setValidateNewPassword('New password is required');
    } else {
      setValidateNewPassword('');
    }

    // validate confirm new password
    if (!confirmNewPassword) {
      setValidateConfirmNewPassword('Confirm new password is required');
    } else if (confirmNewPassword !== newPassword) {
      setValidateConfirmNewPassword('Password confirm does not match');
    } else if (confirmNewPassword.trim() !== '') {
      setValidateConfirmNewPassword('');
    }

    if (
      oldPassword.trim() !== '' &&
      newPassword.trim() !== '' &&
      confirmNewPassword.trim() !== '' &&
      newPassword === confirmNewPassword
    ) {
      const alert = Swal.fire({
        title: 'Password has been reset!',
        // text: 'Click ok to continue',
        icon: 'success',
        confirmButtonText: 'Back to ME!',
      });
    }
  };

  return (
    <div className="w-full px-4 pt-16 bg-secondary mt-10">
      <div className=" max-w-xl p-5 mx-auto bg-white border-50">
        <form onSubmit={handleClickSubmitProfile}>
          <div className="flex items-center">
            <div className="w-36 h-36 rounded-full">
              <div class="relative">
                <img className="rounded-full" src={tempProfileHeader} />
                <div class="absolute bottom-0 right-0">
                  <label for="pp">
                    <img src={addRound} id="upfile" className="w-10 h-10 cursor-pointer" />
                  </label>
                  <input
                    value={profilePicture}
                    onChange={e => {
                      setProfilePicture(e.target.value);
                    }}
                    type="file"
                    id="pp"
                    style={{ display: 'none', visibility: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="m-5 text-2xl font-light">Jenny Hemington</div>
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
              <div className="w-1/2 mx-3">
                <div class="relative">
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    readOnly={!editMode}
                    type="text"
                    className={`w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 ${
                      editMode
                        ? 'focus:outline-none focus:ring-2 focus:ring-red-400'
                        : 'cursor-not-allowed focus:outline-none'
                    }`}
                  />
                  <div class="absolute top-2 p-1 bg-white left-4 ">
                    <p className="text-red-600 text-dark text-xs font-normal">Email</p>
                  </div>
                </div>
                <p className="pl-5 text-red-600 mt-2 mb-5 text-xs">{validateEmail}</p>
              </div>
              <div className="w-1/2 mx-3">
                <div class="relative">
                  <input
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    readOnly={!editMode}
                    type="date"
                    className={`text-dark w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 ${
                      editMode
                        ? 'focus:outline-none focus:ring-2 focus:ring-red-400'
                        : 'cursor-not-allowed focus:outline-none'
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
                  className="flex-shrink rounded-full shadow-input w-20 h-8 bg-primary-grad text-white font-normal forhover mt-5 object-right right-40 absolute"
                >
                  Cancel
                </button>
                <button className="flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white font-normal forhover mt-5 object-right right-5 absolute">
                  Save change
                </button>
              </div>
            ) : (
              <div className="inputFollwer w-full flex-shrink  px-3 right relative">
                <button
                  onClick={e => {
                    e.preventDefault();
                    setEditMode(true);
                  }}
                  className="flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white font-normal forhover mt-5 object-right right-5 absolute"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </form>
        <div>
          <div className="mt-5">
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
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
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
                                value={confirmNewPassword}
                                onChange={e => setConfirmNewPassword(e.target.value)}
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
                                value={oldPassword}
                                onChange={e => setOldPassword(e.target.value)}
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
                            <button className="flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white font-normal px-5 w-auto forhover mt-5 object-right right-5 absolute">
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
          </div>
        </div>
      </div>
    </div>
  );
}
