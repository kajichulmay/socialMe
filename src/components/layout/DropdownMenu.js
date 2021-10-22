import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function DropdownMenu() {
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
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <div className=" flex items-center justify-center hover:bg-gray-200  bg-white rounded-full h-9 w-9 shadow-input ml-3 border border-red-300  minwidth">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#ff4949">
                  {gd}
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-primary-grad text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <SearchActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <SearchInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Search ME
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-primary-grad text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Edit Profile
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sub-grad text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ChatActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <ChatInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Chat
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sub-grad text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DarkLightActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <DarkLightInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Dark Mode
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sub-grad text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LogoutActiveIcon className="w-5 h-5 mr-2 text-violet-400" aria-hidden="true" />
                    ) : (
                      <LogoutInactiveIcon className="w-5 h-5 mr-2 text-violet-400" aria-hidden="true" />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function SearchInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#ff5650"
        strokeWidth="2"
      />
    </svg>
  );
}

function SearchActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#ffe99b"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        stroke="#ff5650"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        stroke="#ffe99b"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChatInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        stroke="#ff5650"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChatActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        stroke="#ffe99b"
        strokeWidth="2"
      />
    </svg>
  );
}

function DarkLightInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        stroke="#ff5650"
        strokeWidth="2"
      />
    </svg>
  );
}

function DarkLightActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        stroke="#ffe99b"
        strokeWidth="2"
      />
    </svg>
  );
}

function LogoutInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        stroke="#ff5650"
        strokeWidth="2"
      />
    </svg>
  );
}

function LogoutActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        stroke="#ffe99b"
        strokeWidth="2"
      />
    </svg>
  );
}
