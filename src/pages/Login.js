import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from '../config/axios';
import { setToken } from '../service/localStorage';
import jwtDecode from 'jwt-decode';
import { AuthContext } from '../context/authContext';
import validator from 'validator';

function Login() {
  // state
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  // validate state
  const [validateEmail, setValidateEmail] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [validateError, setValidateError] = useState('');

  // history
  const history = useHistory();

  // context
  const { user, setUser } = useContext(AuthContext);

  // function
  // register
  const handleClickRegister = () => {
    history.push('/register');
  };

  // login
  const handleClickLogin = async e => {
    try {
      e.preventDefault();
      // validate email
      if (email.trim() === '') {
        setValidateEmail('Email is required');
      } else if (!validator.isEmail(email)) {
        setValidateEmail('Wrong Email form');
      } else {
        setValidateEmail('');
      }

      // validate password
      if (password.trim() === '') {
        setValidatePassword('Password is required');
      } else {
        setValidatePassword('');
      }

      if (email && password) {
        const res = await axios.post('/login', {
          email,
          password,
        });
        setToken(res.data.token);
        setUser(jwtDecode(res.data.token));
        history.push('/profile-setting');
      }
    } catch (err) {
      console.dir(err);
      if (err?.response?.data?.errEmail || err?.response?.data?.errPassword)
        setValidatePassword(err.response.data.errEmail || err.response.data.errPassword);
    }
  };

  return (
    <div className="w-full justify-center lg:items-center flex login-container mt-10 lg:mt-16">
      {/* main login container */}
      <div className="shadow-lg w-full flex flex-col bg-white
      md:w-2/3 lg:flex-row lg:h-5/6 lg:rounded-3xl ">
        {/* left sector */}
        <div className=" text-center bg-primary-grad text-white w-full p-10 pt-20 flex flex-col items-center lg:w-2/3 lg:rounded-l-3xl lg:pt-32">
          <p className="text-4xl">Welcome To Me</p>
          <div className="flex flex-col justify-between items-center h-1/3 mt-10 font-light lg:h-1/3 lg:justify-between">
            <p className="text-xl">Me Social Media</p>
            <p className="text-xl">Exclusive Content</p>
            <p className="text-xl">For contents creater</p>
            <p className="text-xl">and everyone</p>
          </div>
          <button
            onClick={handleClickRegister}
            className="h-12 bg-white text-red-400 shadow-lg rounded-full p-2 w-1/2 lg:w-2/3  mt-10"
          >
            SIGN UP
          </button>
        </div>
        {/*end  left sector */}

        {/* right sector */}
        <div className=" p-10 flex flex-col lg:justify-around justify-center items-center w-full">
          <p className="text-gray-400 text-2xl ">Sign into Your account</p>
          {/* form */}
          <form className="flex flex-col justify-between w-2/3 lg:w-4/5 mt-6 lg:mt-9"
            onSubmit={handleClickLogin}>
            {/* email input */}
            <div className="mx-3">
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
            <p className="pl-10 text-red-600 mt-1 mb-3">{validateEmail}</p>

            {/* password input */}
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
            <p className="pl-10 text-red-600 mt-1 mb-3">{validatePassword}</p>
            <p className="pl-10 text-red-600 mt-1 mb-3">{validateError}</p>

            <button className="h-12 bg-primary-grad forhover text-white rounded-full p-2
            shadow-lg  m-auto w-1/2">
              SIGN IN
            </button>
          </form>
          {/*end form */}

          {/* social login sector */}
          <div className="flex items-center justify-between w-1/2 lg:w-2/3 mt-7 lg:mt-12 ">
            <p className="text-gray-500 text-xl">Sign in with :</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              className="w-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
              className="w-12"
            />
          </div>
          {/*end social login sector */}
        </div>
        {/*end right sector */}
      </div>
    </div>
  );
}

export default Login;
