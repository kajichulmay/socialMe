import React from 'react';
import imageProfile from '../../mockData/image/mockProfile.png';
import iconCake from '../../../src/images/iconCake.png';
import iconEmail from '../../images/IconEmail.png';
function TitleProfile() {
  return (
    <>
      <div className="mt-14 flex lg:h-full  lg:w-4/5 mx-auto justify-center relative">
        <div className="bg-white flex flex-col lg:flex-row  justify-center
      w-full items-center lg:rounded-full shadow-container">
          <div className=" rounded-full mt-5 lg:mt-0  ">
            {/* ProfilePic User */}
            <div className="bg-primary-grad rounded-full w-44 h-44 flex justify-center items-center   ">
              <div
                className="bg-primary-grad  rounded-full border-4 p-20 border-white "
                style={{
                  backgroundImage:
                    'url("https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
          {/* user info */}
          <div className=" flex flex-col  m-7 container items-center lg:items-start  ">
            {/* Name user */}
            <div className="">
              <p className="text-4xl font-normal">Chae young Park</p>
            </div>
            {/* detail user*/}
            <div className="flex mt-2">
              <div className=" ">
                {/*birth Date */}
                <div className="flex items-end  ">
                  <img src={iconCake} className="mr-4" />
                  <span className=" boxEle ">date of birth</span>
                  <span className="text-gray-400">17-06-1993</span>
                </div>

                {/* Email */}
                <div className="flex items-center mt-1  ">
                  <img src={iconEmail} className="mr-4" />
                  <span className=" boxEle ">Email address</span>
                  <span className="text-gray-400">kajichul.chon@gmail.com</span>
                </div>

              </div>
              {/*end detail user*/}
              {/* BTNFollower */}
              <div className="absolute top-2 right-2 ">
                <button className="rounded-full shadow-input px-4 py-2 bg-primary-grad text-white forhover">
                  Follower
                </button>
              </div>
            </div>
            {/*end detail user*/}

          </div>
          {/*end user info */}
        </div>
      </div>
      <div className="bg-white shadow-container lg:w-2/3 mx-auto p-10 mt-10 rounded-3xl
      ">
        <p>About me</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione modi commodi dolorem explicabo sint facere non quas provident nisi.</p>
      </div>
    </>
  );
}

export default TitleProfile;
