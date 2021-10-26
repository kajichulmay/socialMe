import React, { useContext } from 'react';
import iconCake from '../../../src/images/iconCake.png';
import iconEmail from '../../images/IconEmail.png';
import BtnFollow from './BtnFollow';
import Line from './Line';
import { dateOnly } from '../../service/dateService';
import { AuthContext } from '../../context/authContext';
import BtnEditProfile from './BtnEditProfile';
import axios from 'axios';

function TitleProfile() {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <>
      <div className="mt-14 flex  justify-center lg:h-full lg:w-4/5 mx-auto  ">
        <div className="bg-white profile-title w-full shadow-container relative">
          {/* top section */}
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* ProfilePic */}
            <div className=" rounded-full mt-5 lg:mt-0 lg:self-start ">
              <div className="bg-primary-grad rounded-full w-44 h-44 flex justify-center items-center   ">
                <div
                  className="bg-primary-grad  rounded-full border-4 p-20 border-white "
                  style={{
                    backgroundImage: `url(${user?.profilePicture})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
            </div>
            {/*end ProfilePic  */}

            {/* user info */}
            <div className=" flex flex-col m-7 container items-center lg:items-start  ">
              {/* Name user */}
              <div className="flex ">
                <p className="text-4xl font-normal capitalize">{`${user?.firstName} ${user?.lastName}`}</p>
                <BtnEditProfile />
              </div>
              {/* detail user*/}
              <div className="flex mt-2">
                <div className=" ">
                  {/*birth Date */}
                  {user?.birthDate ? (
                    <div className="flex items-end  ">
                      <img src={iconCake} className="mr-4" />
                      <span className=" boxEle capitalize">date of birth</span>
                      <span className="text-gray-400">{dateOnly(user?.birthDate)}</span>
                    </div>
                  ) : null}

                  {/* Email */}
                  <div className="flex items-center mt-1  ">
                    <img src={iconEmail} className="mr-4" />
                    <span className=" boxEle ">Email address</span>
                    <span className="text-gray-400">{user?.email}</span>
                  </div>
                </div>
                {/*btn follow */}
                <BtnFollow />
              </div>
            </div>
            {/*end user info */}
          </div>

          {/* bottom section biography */}
          {/* <div className="-mt-8">
            <Line title="about me" self="center" />
            <div className="pb-8 px-8 text-gray-500">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit voluptate quam ipsam, inventore corrupti, nemo eveniet obcaecati, temporibus repudiandae quae nisi dignissimos iure ex perferendis qui! Eveniet commodi quam dolorem. Officia porro incidunt, laborum eaque error autem harum cupiditate. Quasi accusantium, velit numquam blanditiis tempora assumenda modi voluptatibus id aperiam.</p>
            </div>
          </div> */}
          {/*end biography */}
        </div>
        {/*end user info */}
      </div>
    </>
  );
}

export default TitleProfile;
