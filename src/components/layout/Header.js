import logoHeader from '../../images/logoHeader.png';
import DropdownNotification from '../dropdown/DropdownNotification';
import DropdownMenu from './DropdownMenu';
import Swal from 'sweetalert2';
import ProfilePicUi from '../ui/ProfilePicUi';
import DropdownSearchusers from '../dropdown/DropdownSearchusers';
import axios from '../../config/axios';
import { useHistory, useParams } from 'react-router';
import { useContext, useState, useEffect } from 'react';
import { removeToken } from '../../service/localStorage';
import { userContext } from '../../context/userContext';
import { AuthContext } from '../../context/authContext';
import { PostContext } from '../../context/postContext';
import { DarkContext } from '../../context/DarkContext';
import ToggleDark from './ToggleDark';

function Header({ children }) {
  const { user, setUser } = useContext(AuthContext);
  const { myuser } = useContext(userContext);
  const { togleReFeed } = useContext(PostContext);
  const { dark, setDark } = useContext(DarkContext);
  const history = useHistory();
  const params = useParams();
  const [search, setSearch] = useState('');
  const [alluser, setAlluser] = useState([]);

  useEffect(() => {
    try {
      const fetchAlluserforfilter = async () => {
        const res = await axios.get('/user');
        setAlluser(res.data.allUser);
      };
      fetchAlluserforfilter();
    } catch (err) {
      console.log(err);
    }
  }, [params]);

  const handleClickMeLogo = () => {
    history.push('/newsfeed');
    togleReFeed();
  };

  const handleClickLogout = async () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout!',
      }).then(result => {
        if (result.isConfirmed) {
          removeToken();
          setUser(null);
          Swal.fire('Logout!', 'Your account has been logout.', 'success');
          history.push('/');
        }
      });
    } catch (err) {
      console.dir(err);
    }
  };
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
    <>
      {search && <DropdownSearchusers alluser={alluser} search={search} setSearch={setSearch} />}
      <div
        className={`${
          dark ? 'dark-bg' : 'bg-white'
        } flex items-center justify-between h-16 p-1.5 shadow-container header-border fixed top-0 w-full z-20 rounded-b-3xl px-5`}
      >
        <div className="flex items-center h-full">
          {/* logo */}

          <button type="button" onClick={handleClickMeLogo}>
            <img className="w-10 h-10 mx-3 cursor-pointer " src={logoHeader} alt="" />
          </button>

          {/* welcome left */}

          {user ? (
            <div
              className={`text-base flex-nowrap text-dark font-normal flex-shrink w-40 lg:hidden ${
                dark ? 'dark-text' : 'text-dark'
              }`}
            >
              Welcome {myuser?.firstName}
            </div>
          ) : (
            <div
              className={`text-base flex-nowrap text-dark font-normal flex-shrink w-40 lg:hidden ${
                dark ? 'dark-text' : 'text-dark'
              }`}
            >
              Welcome Guest
            </div>
          )}

          {/* search */}
          <div
            className={`bg-primary-grad h-11 flex items-center w-auto p-0.5 rounded-full mx-6 shadow-md invisible lg:visible ${
              user ? '' : 'hidden'
            }`}
          >
            <div
              className={`flex items-center rounded-full  bg-white h-full  ${dark ? 'dark-bg-none-alpha' : 'bg-white'}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-5"
                fill={`${dark ? '#181818' : '#fff'}`}
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
                className={` w-60 text-base  rounded-full outline-none h-full maxwidth ${
                  dark ? 'dark-bg-none-alpha placeholder-white focus:text-white ' : 'bg-white'
                }`}
                type="text"
                placeholder="Search ME"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={`${user ? 'hidden' : ''} ${dark ? 'dark-text' : 'text-dark'}  maxwidth`}>Welcome Guest</div>
        <div className={`flex items-center ${user ? '' : 'hidden'} `}>
          {/* welcome right */}
          {user ? (
            <div className={`${dark ? 'dark-text' : 'text-dark'} text-base  font-normal flex-shrink maxwidth`}>
              Welcome {myuser?.firstName}
            </div>
          ) : (
            <div className={`text-base font-normal flex-shrink maxwidth ${dark ? 'dark-text' : 'text-dark'}`}>
              Welcome Guest
            </div>
          )}

          {/* profile's pic */}
          <div
            className={`shadow-input rounded-full mx-3 maxwidth wrapper ${user ? '' : 'hidden'} cursor-pointer 
            }`}
          >
            <ProfilePicUi beforeSize="9" afterSize="9" url={myuser?.profilePicture} id={myuser?.id} />
          </div>

          {/* chat */}
          <div
            className={`${
              dark ? 'dark-bg hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
            } hover:bg-gray-200 flex items-center justify-center  rounded-full h-9 w-9 shadow-input ml-3 border border-red-300 maxwidth`}
          >
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
          <ToggleDark />

          {/* logout */}
          <div
            className={`${
              dark ? 'dark-bg hover:bg-gray-700' : 'bg-white hover:bg-gray-200'
            } hover:bg-gray-200 flex items-center justify-center  rounded-full h-9 w-9 shadow-input ml-3 border border-red-300 maxwidth`}
            onClick={handleClickLogout}
          >
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
          <DropdownMenu alluser={alluser} />
        </div>
      </div>
    </>
  );
}

export default Header;
