import React from 'react';

function Login() {
  return (
    <div className="flex w-full justify-center h-screen mt-10">
      <div className="rounded-3xl shadow-lg w-2/3  h-5/6 flex">
        <div className="bg-primary-grad rounded-l-3xl text-white w-2/3 p-10 pt-20 flex flex-col  items-center">
          <p className="text-4xl">Welcome To Me</p>
          <div className="flex flex-col h-1/3 justify-between items-center mt-10 font-light">
            <p className="text-xl">Me Social Media</p>
            <p className="text-xl">Exclusive Content</p>
            <p className="text-xl">For contents creater</p>
            <p className="text-xl">and everyone</p>
          </div>
          <button className="h-12 bg-white text-red-400 mt-20 shadow-lg rounded-full p-2 w-1/2">SIGN UP</button>
        </div>
        <div className="p-10 flex flex-col h-full justify-between items-center w-full pt-20">
          <p className="text-gray-400 text-2xl">Sign into Your account</p>
          <form className="flex flex-col h-3/5 justify-between w-2/3 mt-10">
            <input
              type="text"
              className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-10 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Email Address"
            />
            <p className="pl-10 text-red-600">Email is required</p>

            <input
              type="password"
              className="h-12 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-10 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Password"
            />
            <p className="pl-10 text-red-600">Password is required</p>

            <button className="h-12 bg-primary-grad forhover text-white rounded-full p-2 shadow-lg mt-5 w-1/2 m-auto ">
              SIGN IN
            </button>
          </form>
          <div className="flex items-center justify-around w-2/3">
            <p className="text-gray-500 text-xl">Sign in with</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              className="w-14"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
              className="w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
