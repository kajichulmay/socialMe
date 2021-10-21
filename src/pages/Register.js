import React from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  // history
  const history = useHistory();

  // function
  const handleclickSignin = () => {
    history.push('/');
  };

  return (
    <div className="w-full justify-center mt-10 flex lg:h-full lg:mt-20">
      <div className="shadow-lg w-full flex flex-col bg-white md:w-2/3 lg:flex-row lg:h-5/6 lg:rounded-3xl">
        <div className="bg-primary-grad text-white w-full p-10 pt-20 flex flex-col  items-center lg:w-2/3 lg:rounded-l-3xl lg:pt-32">
          <p className="text-4xl">Register Now!!!</p>
          <div className="flex flex-col justify-between items-center h-1/3 mt-10 font-light lg:h-1/3 lg:justify-between">
            <p className="text-xl">Create Your new account</p>
            <p className="text-xl">To Create youe comunity</p>
            <p className="text-xl">Join your friend</p>
            <p className="text-xl">and show Who you are</p>
          </div>
          <button
            onClick={handleclickSignin}
            className="h-12 bg-white text-red-400 shadow-lg rounded-full p-2 w-1/2 mt-20"
          >
            SIGN IN
          </button>
        </div>
        <div className="p-10 flex flex-col justify-between items-center w-full pt-20 lg:h-full">
          <p className="text-gray-400 text-2xl">Register new account</p>
          <form className="flex flex-col h-full justify-between w-2/3 mt-10 lg:h-3/5">
            {/* form */}
            <input
              type="text"
              className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-5 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Firstname"
            />
            <p className="pl-10 text-red-600 mt-2 mb-5">Firstname is required</p>
            {/* icon */}

            {/* form */}
            <input
              type="text"
              className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-5 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Lastname"
            />
            <p className="pl-10 text-red-600 mt-2 mb-5">Lastname is required</p>

            {/* form */}
            <input
              type="text"
              className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-5 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Email Address"
            />
            <p className="pl-10 text-red-600 mt-2 mb-5">Email is required</p>

            {/* form */}
            <input
              type="password"
              className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-5 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Password"
            />
            <p className="pl-10 text-red-600 mt-2 mb-5">Password is required</p>

            {/* form */}
            <input
              type="password"
              className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-5 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Confirm Password"
            />
            <p className="pl-10 text-red-600 mt-2 mb-5">Confirm Password is required</p>

            <button className="h-12 bg-primary-grad forhover text-white rounded-full p-2 shadow-lg mt-5 w-3/4 m-auto lg:w-1/2">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
