import { Menu, Transition } from '@headlessui/react';
import axios from '../../config/axios';
import { Fragment, useContext } from 'react';
import Swal from 'sweetalert2';
import { PostContext } from '../../context/postContext';

function DropDownEditDeleteComment({ commentId, setToggleStateComment, setIsEditComment }) {
  const handleClickDeleteComment = async () => {
    try {
      await axios.delete(`/comment/delete/${commentId}`);
      setToggleStateComment(cur => !cur);
    } catch (err) {
      console.dir(err);
    }
  };
  const handleClickToggleEditComment = async () => {
    setIsEditComment(cur => !cur);
  };
  return (
    <div>
      <Menu as="div" className="relative z-20 inline-block text-left ml-5">
        <div>
          <Menu.Button>
            <Dotdropdown />
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {/* edit menu */}
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleClickToggleEditComment}
                    className={`${
                      active ? 'bg-violet-500 text-red-400' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Edit Comment
                  </button>
                )}
              </Menu.Item>
            </div>
            {/* delete menu */}
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleClickDeleteComment}
                    className={`${
                      active ? 'bg-violet-500 text-red-400' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon className="w-5 h-5 mr-2 text-red-400" aria-hidden="true" />
                    ) : (
                      <DeleteInactiveIcon className="w-5 h-5 mr-2 text-red-400" aria-hidden="true" />
                    )}
                    Delete Comment
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

function EditInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <path d="M3 6H17" stroke="#FCA5A5" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#FCA5A5" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
      <path d="M3 6H17" stroke="#EF4444" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#EF4444" strokeWidth="2" />
    </svg>
  );
}

function Dotdropdown(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export default DropDownEditDeleteComment;