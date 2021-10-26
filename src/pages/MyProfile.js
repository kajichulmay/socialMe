import React, { useContext, useState, useEffect } from 'react';
import Chatbox from '../components/myProfile/ChatBox';
import AddPost from '../components/myProfile/AddPost';
import Line from '../components/myProfile/Line';
import TitleProfile from '../components/myProfile/TitleProfile';
import FeedContainer from '../components/Post/FeedContainer';
import Spinner from '../components/spinner/Spinner';
import { SpinnerContext } from '../context/SpinnerContext';
import axios from '../config/axios';
import { AuthContext } from '../context/authContext';
import { userContext } from '../context/userContext';
function MyProfile() {
  const { spinner } = useContext(SpinnerContext);
  const { user } = useContext(AuthContext);
  const [myAccountUser, setMyAccountUser] = useState();

  useEffect(() => {
    const fetchMyuserAccount = async () => {
      try {
        const myAccount = await axios.get('/user/oneUser');
        // console.log('dsdsd', myAccount.data);
        setMyAccountUser(myAccount.data.oneUser);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchMyuserAccount();
  }, []);

  return (
    <div className="w-full lg:flex justify-center h-screen ">
      {spinner && <Spinner />}
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden ">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="py-8 lg:px-8 px-0 mt-10">
            {/* personalProfile */}
            <TitleProfile myAccountUser={myAccountUser} />
            {/*end personalProfile */}
            <Line title="Create Post" />
            <AddPost />
            <Line title="news feed" />
            <FeedContainer />
          </div>
        </div>
        {/* <!-- Fixed sidebar --> */}
        <Chatbox />
      </div>
    </div>
  );
}

export default MyProfile;
