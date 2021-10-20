import React from 'react';
import portrait from '../../images/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg';

function Post() {
  return (
    <>
      <div className="bg-white w-3/4 mx-auto container p-4 mt-10 shadow-container rounded-xl relative  "
      >
        <div class="absolute -left-8 -top-8 w-20 h-20">
          <img src={portrait} className="rounded-full shadow-input" />
        </div>
        <div className="flex justify-between outline-black">
          <div>
            <p className="text-xl">Firstname Lastname</p>
            <p className="text-sm text-gray-500">10/28/2020 14:38pm</p>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
        <p className="mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <div className="flex  mt-4">
          <div className="flex mr-4 items-center">
            {/* display recomment */}
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 mr-2 icon-grad" viewBox="0 0 20 20" >
              <defs>
                <linearGradient id="iconGrad" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(255, 233, 155, 1)" />
                  <stop offset="40%" stop-color="rgba(255, 171, 124, 1)" />
                  <stop offset="100%" stop-color="rgba(255, 86, 80, 1)" />
                </linearGradient>
              </defs>
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <p className="bg-main">145 recommend</p>
          </div>
          {/* display comment */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              className="h-8 w-8 mr-2"
            >
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
            <p className=" bg-sub">12 comment</p>
          </div>

          <button className="">asdasd</button>
        </div>
      </div >
    </>
  );
}

export default Post;
