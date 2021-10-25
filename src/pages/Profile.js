import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import tempProfileHeader from '../mockData/images/tempProfileHeader.png';
import addRound from '../images/Add_round.png';

export default function Profile() {
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
                  disabled
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
        </form>
      </div>
    </div>
  );
}
