import logoHeader from '../../images/logoHeader.png';
import tempProfileHeader from '../../mockData/images/tempProfileHeader.png';
import DropdownNotification from '../dropdown/DropdownNotification';
import DropdownMenu from './DropdownMenu';
import Toggle from './Toggle';

function Header({ children }) {
  const gd = (
    <defs>
      <linearGradient id="iconGrad" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(255, 233, 155, 1)" />
        <stop offset="40%" stop-color="rgba(255, 171, 124, 1)" />
        <stop offset="100%" stop-color="rgba(255, 86, 80, 1)" />
      </linearGradient>
    </defs>
  );

  return (
    <div className="flex bg-white items-center justify-between h-16 p-1.5 shadow-container header-border fixed top-0 w-full z-20 rounded-b-3xl px-5">
      <div className="flex items-center h-full">
        {/* logo */}
        <img className="w-10 h-10 mx-3 " src={logoHeader} alt="" />

        {/* welcome left */}
        <div className="text-base flex-nowrap text-dark font-normal flex-shrink w-40 lg:hidden ">Welcome Guest</div>

        {/* search */}
        <div className="bg-primary-grad h-11 flex items-center w-auto p-0.5 rounded-full mx-6 shadow-md invisible lg:visible  ">
          <div className="flex items-center rounded-full  bg-white h-full  ">
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
            <input
              className=" w-60 text-base  rounded-full outline-none h-full maxwidth "
              type="text"
              placeholder="search people"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center ">
        {/* welcome right */}
        <div className="text-base text-dark font-normal flex-shrink maxwidth  ">Welcome Guest</div>

        {/* profile's pic */}
        <div className="shadow-input rounded-full mx-3 maxwidth wrapper ">
          <img class="rounded-full h-9 w-9 cursor-pointer bounce_button " src={tempProfileHeader} alt="" />
        </div>

        {/* chat */}
        <div className=" flex items-center justify-center bg-white hover:bg-gray-200 rounded-full h-9 w-9 shadow-input border border-red-300 maxwidth cursor-pointer ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon-grad" viewBox="0 0 20 20">
              {gd}
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* DropdownNotification */}
        <DropdownNotification />

        {/* dark/light mode */}
        <Toggle />

        {/* logout */}
        <div className="flex items-center justify-center bg-white hover:bg-gray-200  rounded-full h-9 w-9 shadow-input ml-3 border border-red-300 icon-grad maxwidth cursor-pointer ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 icon-grad" viewBox="0 0 20 20" fill="currentColor">
              {gd}
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* dorpdown menu */}
        <DropdownMenu />
      </div>
    </div>
  );
}

export default Header;
