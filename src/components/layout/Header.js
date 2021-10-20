import React from 'react';
import logoHeader from '../../images/logoHeader.png';
import tempProfileHeader from '../../mockData/images/tempProfileHeader.png';

function Header({ children }) {
  return (
    <div className="flex bg-yellow-white items-center justify-between h-auto p-1.5 shadow-container header-border ">
      <div className="flex items-center">
        <img className="w-8 h-8 mx-3" src={logoHeader} alt="" />

        <div className="bg-primary-grad h-7 flex items-center w-auto p-0.5 rounded-full mx-6">
          <div className="flex items-center rounded-full  bg-white h-6 shadow-input ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-5"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke="#FF4949"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input className=" w-48 text-xs h-5 rounded-full outline-none " type="text" placeholder="search people" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-sm text-dark font-normal">Welcome Guest</div>
        <div className="shadow-input rounded-full mx-3">
          <img class="rounded-full h-7 w-7" src={tempProfileHeader} alt="" />
        </div>

        <div className=" flex items-center justify-center bg-white rounded-full h-7 w-7 shadow-input border border-red-300">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#FF4949">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className=" flex items-center justify-center bg-white rounded-full h-7 w-7 shadow-input mx-3 border border-red-300">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#FF4949"
              viewBox="0 0 24 24"
              stroke="#FF4949"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
