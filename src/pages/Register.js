import axios from '../config/axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfilePicUi from '../components/ui/ProfilePicUi';
import Spinner from '../components/spinner/Spinner';
import { SpinnerContext } from '../context/SpinnerContext';
import validator from 'validator';

function Register() {
  // state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewProfie, setPreviewProfile] = useState(null);

  // validate state
  const [validateFirstname, setValidateFirstname] = useState('');
  const [validateLastname, setValidateLastname] = useState('');
  const [validateEmail, setValidateEmail] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [validateConfirmpassword, setValidateConfirmpassword] = useState('');

  // context
  const { spinner, setSpinner } = useContext(SpinnerContext);

  // history
  const history = useHistory();

  // function
  // back to signin
  const handleclickSignin = () => {
    history.push('/');
  };

  // register
  const handleClickRegister = async e => {
    e.preventDefault();
    try {
      // validate
      if (!firstName) {
        setValidateFirstname('Firstname is required');
      } else {
        setValidateFirstname('');
      }
      if (!lastName) {
        setValidateLastname('Lastname is required');
      } else {
        setValidateLastname('');
      }
      if (!email) {
        setValidateEmail('Email is Required');
      } else if (!validator.isEmail(email)) {
        setValidateEmail('Invalid email form');
      } else {
        setValidateEmail('');
      }
      if (!password) {
        setValidatePassword('Password is required');
      } else if (password.length < 5) {
        setValidatePassword('Password must longer than 5');
      } else {
        setValidatePassword('');
      }
      if (confirmPassword !== password) {
        setValidateConfirmpassword('Wrong confirm password');
      }

      if (firstName && lastName && email && password.length > 5 && confirmPassword === password) {
        setSpinner(true);
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirmPassword', confirmPassword);
        formData.append('picture', profilePicture);
        await axios.post('/register', formData);
        setSpinner(false);
        history.push('/');
      }
    } catch (err) {
      console.log(err);
      setSpinner(false);
    }
  };

  // change Profilepicture
  const handleChangeProfilePicture = e => {
    setProfilePicture(e.target.files[0]);
    setPreviewProfile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-full justify-center mt-10 flex lg:h-full lg:mt-20">
      {spinner && <Spinner />}
      <div className="shadow-lg w-full flex flex-col bg-white md:w-2/3 lg:flex-row lg:h-5/6 lg:rounded-3xl">
        {/* left sector */}
        <div className="text-center bg-primary-grad text-white w-full p-10 pt-20 flex flex-col items-center lg:w-2/3 lg:rounded-l-3xl lg:pt-32">
          <p className="text-4xl">Register Now!!!</p>
          <div className="flex flex-col justify-between items-center h-1/3 mt-10 font-light lg:h-1/3 lg:justify-between">
            <p className="text-xl">Create Your new account</p>
            <p className="text-xl">To Create youe comunity</p>
            <p className="text-xl">Join your friend</p>
            <p className="text-xl">and show Who you are</p>
          </div>
          <button
            onClick={handleclickSignin}
            className="h-12 bg-white text-red-400 shadow-lg rounded-full p-2 w-1/2 mt-16"
          >
            SIGN IN
          </button>
        </div>
        {/*end left sector */}

        {/* right sector */}
        <div
          className="flex flex-col justify-between items-center
                w-full p-10"
        >
          <p className="text-gray-400 text-2xl">Register new account</p>
          <form className="flex flex-col justify-between w-2/3 mt-10 lg:h-full" onSubmit={handleClickRegister}>
            {/* profile */}
            <label className="mx-auto">
              {previewProfie ? (
                <ProfilePicUi beforeSize="48" afterSize="48" url={previewProfie} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-56 w-56 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <input type="file" className="hidden" onChange={handleChangeProfilePicture} />
            </label>

            {/* form */}
            <div className=" mx-3">
              <div class="relative">
                <input
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  type="text"
                  className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-sm font-normal">Firstname</p>
                </div>
              </div>
            </div>
            <p className="pl-10 text-red-600 mt-2 mb-5">{validateFirstname}</p>

            {/* input lastname */}
            <div className=" mx-3">
              <div class="relative">
                <input
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  type="text"
                  className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-sm font-normal">Lastname</p>
                </div>
              </div>
            </div>
            <p className="pl-10 text-red-600 mt-2 mb-5">{validateLastname}</p>

            {/* input email */}
            <div className=" mx-3">
              <div class="relative">
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="text"
                  className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-sm font-normal">Email Address</p>
                </div>
              </div>
            </div>
            <p className="pl-10 text-red-600 mt-2 mb-5">{validateEmail}</p>

            {/* input password */}
            <div className=" mx-3">
              <div class="relative">
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-sm font-normal">Password</p>
                </div>
              </div>
            </div>
            <p className="pl-10 text-red-600 mt-2 mb-5">{validatePassword}</p>

            {/* input conFirmPassword */}
            <div className=" mx-3">
              <div class="relative">
                <input
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  type="password"
                  className="w-full h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-sm font-normal">Confirm Password</p>
                </div>
              </div>
            </div>
            <p className="pl-10 text-red-600 mt-2 mb-5">{validateConfirmpassword}</p>

            <button className="h-12 bg-primary-grad forhover text-white rounded-full p-2 shadow-lg mt-5 w-3/4 m-auto lg:w-1/2">
              Register
            </button>
          </form>
          {/* end form */}
        </div>
        {/* end right sector   */}
      </div>
    </div>
  );
}

export default Register;
