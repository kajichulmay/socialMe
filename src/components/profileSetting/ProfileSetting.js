import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import tempProfileHeader from '../../mockData/images/tempProfileHeader.png';
import addRound from '../../images/Add_round.png';
import Input from './Input';

export default function ProfileSetting() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-xl p-5 mx-auto bg-white border-50">
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
        <div className="flex mt-5">
          <div className="w-1/2 mx-3">
            <div class="relative">
              <input
                type="text"
                className=" w-full h-10 border rounded-full border-red-400 p-1.5 mt-5 shadow-lg pl-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-purple-500`} />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in
                full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-purple-500`} />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">No.</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
