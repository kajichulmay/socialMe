import React from 'react';
import imageProfile from '../../mockData/image/mockProfile.png';
import iconCake from '../../../src/images/iconCake.png';
import iconEmail from '../../images/IconEmail.png';
function TitleProfile() {
  return (
    <div className="outline-black flex lg:h-full  lg:w-full justify-center ">
      <div className=" w-screen flex justify-center m-8 lg:w-3/4   lg:flex-row items-center
      lg:rounded-full bg-white shadow-container outline-black ">
        <div className="boximage  rounded-full mt-5 lg:mt-0  w-44 h-44 ">
          {/* Profile picture User */}
          <div className="bg-primary-grad  rounded-full w-44 h-44  flex justify-center items-center   ">
            <div
              className="bg-primary-grad  rounded-full w-40 h-40 border-4 p-20 border-white "
              style={{
                backgroundImage:
                  'url("https://www.brighttv.co.th/wp-content/uploads/2021/07/68cfcbafe7074cac914f2556f67ca76e.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
        <div className="boxText flex flex-col m-10 container lg:w-full  items-center lg:items-start ">
          <div className="nameTitle">
            {/* Name user */}
            <p className="text-4xl font-normal">Chae young Park</p>
          </div>
          <div className="personal flex flex-col lg:flex-row  justify-center lg:justify-between items-center  w-full  h-full ">
            <div className="TextPersonal w-3/4">
              <div className="flex items-end w-full  justify-center lg:justify-start mt-1 ">
                <img src={iconCake} className="mr-4" />
                {/* Date User */}
                <span className=" boxEle ">date of birth</span>
                <span className="boxEle">17-06-1993</span>
              </div>
              <div className=" flex items-end  justify-center lg:justify-start w-full mt-1 ">
                {/* Email */}
                <img src={iconEmail} className="mr-4" />
                <span className=" boxEle ">Email address</span>
                <span className="boxEle">kajichul.chon@gmail.com</span>
              </div>
            </div>
            {/* Button Follwer */}
            <div className="inputFollwer w-1/4 flex justify-center mt-5 lg:mt-0 ">
              <button className="rounded-full shadow-input w-24 h-8 bg-primary-grad text-white font-thin forhover">
                Follower
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleProfile;
