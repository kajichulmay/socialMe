import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import tempProfileHeader from '../mockData/images/tempProfileHeader.png';
import addRound from '../images/Add_round.png';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';

export default function ProfileSetting() {
  return (
    <div className="w-full px-4 pt-16 bg-secondary mt-10">
      <div className=" max-w-xl p-5 mx-auto bg-white border-50">
        <div className="flex items-center">
          <div className="w-36 h-36 rounded-full">
            <div class="relative">
              <img className="rounded-full" src={tempProfileHeader} />
              <div class="absolute bottom-0 right-0">
                <img src={addRound} className="w-10 h-10" />
              </div>
            </div>
          </div>
          <div className="m-5 text-2xl font-light">Jenny Hemington</div>
        </div>
        <form>
          <div className="flex mt-5">
            <div className="w-1/2 mx-3">
              <div class="relative">
                <input
                  type="text"
                  className="w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-xs font-normal">First name</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 mx-3">
              <div class="relative">
                <input
                  type="text"
                  className=" w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-xs font-normal">Last name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="w-1/2 mx-3">
              <div class="relative">
                <input
                  type="text"
                  className=" w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <div class="absolute top-2 p-1 bg-white left-4 ">
                  <p className="text-red-600 text-dark text-xs font-normal">Email</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 mx-3">
              <div class="relative">
                <input
                  type="date"
                  className="text-dark w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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
                <textarea className=" w-full h-36 border rounded-3xl border-red-400 pt-3  mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
                <div class="absolute top-2 p-1 bg-white left-4  ">
                  <p className="text-red-600 text-dark text-xs font-normal h-">Biography</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inputFollwer w-full flex-shrink  px-3 right relative">
            <button className=" italic font-light flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white  forhover mt-5 object-right right-5 absolute">
              Save change
            </button>
          </div>
        </form>
        <form>
          <div className="mt-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-auto px-4 py-2 text-xs text-left text-dark-thin font-thin ">
                    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-red-400`} />
                    <span>Change password ?</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <form className="mt-10 mb-10 ">
                      <div className=" w-1/3">Reset your password</div>
                      <div className="w-full flex ">
                        <div className="w-1/2">
                          <div className="mx-3 mt-5">
                            <div class="relative">
                              <input
                                type="text"
                                className="w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                              />
                              <div class="absolute top-2 p-1 bg-white left-4 ">
                                <p className="text-red-600 text-dark text-xs font-normal">New password</p>
                              </div>
                            </div>
                          </div>
                          <div className="mx-3 mt-3">
                            <div class="relative">
                              <input
                                type="text"
                                className="w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                              />
                              <div class="absolute top-2 p-1 bg-white left-4 ">
                                <p className="text-red-600 text-dark text-xs font-normal">Confirm new password</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <div className="mx-3 mt-5">
                            <div class="relative">
                              <input
                                type="text"
                                className="w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                              />
                              <div class="absolute top-2 p-1 bg-white left-4 ">
                                <p className="text-red-600 text-dark text-xs font-normal">Current password</p>
                              </div>
                            </div>
                          </div>
                          <div className="inputFollwer w-full flex-shrink  px-3 right relative mt-4 mb-20">
                            <button className="flex-shrink rounded-full shadow-input w-32 h-8 bg-primary-grad text-white italic font-light px-5 w-auto forhover mt-5 object-right right-5 absolute">
                              Reset password
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </form>
      </div>
    </div>
  );
}
