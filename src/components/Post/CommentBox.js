import React from 'react';
import portrait from '../../images/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg';
function CommentBox() {
  return (
    <>
      {/* comment section */}
      <div className="content-section mt-4 flex flex-col  px-4">
        {/* each comment */}
        <div className=" mx-8 w-3/4 mt-4 mb-8">
          <div className="pl-16 flex justify-end items-center">
            <p className="mr-2 text-lg">Firstname Lastname</p>
            <p className="text-sm text-gray-500">10/28/2020 14:38pm</p>
          </div>
          <div className="bg-white relative py-6 px-14 shadow-container rounded-3xl ">
            <div class="absolute -left-8 -top-8 w-20 h-20">
              <img src={portrait} className="rounded-full shadow-input" />
            </div>

            {/* name and date */}

            <div className="comment-container">
              {/* content post */}
              <div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                  enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                img
              </div>
            </div>
          </div>
        </div>
        {/* each comment */}
        <div className=" w-3/4 mt-4 mb-8 self-end mx-8">
          <div className="flex items-center">
            <p className="mr-2 text-lg">Firstname Lastname</p>
            <p className="text-sm text-gray-500">10/28/2020 14:38pm</p>
          </div>
          <div className="bg-white relative py-6 px-14 shadow-container rounded-3xl ">
            <div class="absolute -right-8 -top-8 w-20 h-20">
              <img src={portrait} className="rounded-full shadow-input" />
            </div>

            {/* name and date */}

            <div className="comment-container">
              {/* content post */}
              <div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                  enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <img src="../../images/mockPicPost.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* each comment */}
      </div>
    </>
  );
}

export default CommentBox;
