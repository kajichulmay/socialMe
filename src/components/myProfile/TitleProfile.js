import React from 'react';
import imageProfile from '../../mockData/image/mockProfile.png';
import iconCake from '../../../src/images/iconCake.png';
import iconEmail from '../../images/IconEmail.png';
function TitleProfile() {
  return (
    <div className=" flex outline-black bg-white w-3/4 justify-center">
      <div className=" w-3/4 m-8  flex items-center boxProfile shadow-container   ">
        <div className="boximage rounded-full p-1 ">
          <div className="bg-primary-grad  rounded-full p-1">
            <img className="rounded-full border-8 border-white " src={imageProfile} />
          </div>
        </div>
        <div className="boxText flex flex-col m-10 w-full ">
          <div className="nameTitle">
            <p className="text-4xl font-normal">Jenny Wilson</p>
          </div>
          <div className="personal flex justify-between items-center  w-full  h-full ">
            <div className="TextPersonal w-3/4">
              <div className="flex items-end w-full justify-start mt-1 ">
                <img src={iconCake} className="mr-4" />
                <span className=" boxEle ">date of birth</span>
                <span className="boxEle">17-06-1993</span>
              </div>
              <div className=" flex items-end justify-start w-full mt-1 ">
                <img src={iconEmail} className="mr-4" />
                <span className=" boxEle ">Email address</span>
                <span className="boxEle">kajichul.chon@gmail.com</span>
              </div>
            </div>
            <div className="inputFollwer w-1/4 flex justify-center">
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
