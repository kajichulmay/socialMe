import React, { useContext } from 'react';
import iconCake from '../../../src/images/iconCake.png';
import iconEmail from '../../images/IconEmail.png';
import BtnFollow from './BtnFollow';
import Line from './Line';
import { dateOnly } from '../../service/dateService';
import { AuthContext } from '../../context/authContext';
import { DarkContext } from '../../context/DarkContext';
import ProfilePicUi from '../ui/ProfilePicUi';
import BtnEditProfile from './BtnEditProfile';
import { userContext } from '../../context/userContext';

function TitleProfile({ oneUser }) {
  const { user } = useContext(AuthContext);
  const { dark } = useContext(DarkContext);
  console.log('oneUser', oneUser);
  console.log(user);
  const { myuser } = useContext(userContext);
  // console.log('oneUser', oneUser);

  return (
    <>
      <div className="mt-14 flex  justify-center lg:h-full lg:w-4/5 mx-auto">
        <div className={`${dark ? 'dark-bg2' : ''} profile-title w-full shadow-container relative`}>
          {/* top section */}
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* ProfilePic */}
            <div className=" rounded-full mt-5 lg:mt-0 lg:self-start ">
              <div className="bg-primary-grad rounded-full w-44 h-44 flex justify-center items-center   ">
                {oneUser?.profilePicture ? (
                  <div
                    className={`bg-primary-grad  rounded-full border-4 p-20 ${
                      dark ? 'border-gray-800' : 'border-white'
                    } `}
                    style={{
                      backgroundImage: `url(${oneUser?.profilePicture})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                ) : (
                  <ProfilePicUi
                    beforeSize="48"
                    afterSize="48"
                    url="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
                    id={oneUser?.id}
                  />
                )}
              </div>
            </div>
            {/*end ProfilePic  */}

            {/* user info */}
            <div className=" flex flex-col m-7 container items-center lg:items-start  ">
              {/* Name user */}
              <div className="">
                <p className="text-4xl font-normal capitalize">{`${oneUser?.firstName} ${oneUser?.lastName}`}</p>
              </div>
              {/* detail user*/}
              <div className="flex mt-2">
                <div className=" ">
                  {/*birth Date */}

                  {oneUser?.birthDate ? (
                    <div className="flex items-end  ">
                      <img src={iconCake} className="mr-4" />
                      <span className=" boxEle capitalize">date of birth</span>
                      <span className="text-gray-400">{dateOnly(oneUser?.birthDate)}</span>
                    </div>
                  ) : null}

                  {/* Email */}
                  <div className="flex items-center mt-1  ">
                    <img src={iconEmail} className="mr-4" />
                    <span className=" boxEle ">Email address</span>
                    <span className="text-gray-400">{oneUser?.email}</span>
                  </div>
                </div>
                {/*btn follow */}
                <div className="absolute top-2 right-2 ">
                  {myuser?.id === oneUser?.id ? <BtnEditProfile /> : <BtnFollow oneUser={oneUser} />}
                </div>
              </div>
            </div>
            {/*end user info */}
          </div>

          {/* bottom section biography */}
          {oneUser?.bio && (
            <div className="-mt-8">
              <Line title="about me" self="center" />
              <div className="pb-8 px-8 text-gray-500 break-words ">
                <p>{oneUser.bio}</p>
              </div>
            </div>
          )}
          {/*end biography */}
        </div>
        {/*end user info */}
      </div>
    </>
  );
}

export default TitleProfile;
