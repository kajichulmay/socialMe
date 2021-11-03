import React, { useContext, useEffect, useState } from 'react';
import Chatbox from '../components/myProfile/ChatBox';
import AddPost from '../components/myProfile/AddPost';
import Line from '../components/myProfile/Line';
import TitleProfile from '../components/myProfile/TitleProfile';
import FeedContainer from '../components/Post/FeedContainer';
import Spinner from '../components/spinner/Spinner';
import { SpinnerContext } from '../context/SpinnerContext';
import axios from '../config/axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { DarkContext } from '../context/DarkContext';
import { userContext } from '../context/userContext';
import { PostContext } from '../context/postContext';
function MyProfile() {
  // state
  const [oneUser, setOneUser] = useState({});
  const [allmypost, setAllmypost] = useState([]);
  const [toggleUpdatePost, setToggleUpdatePost] = useState(false);

  //context
  const { dark, darkBg } = useContext(DarkContext);

  // params
  const params = useParams();
  const { userId } = params;

  // fetch
  useEffect(() => {
    const fetchOneuser = async () => {
      const res = await axios.get(`/user/otherUser/${userId}`);
      // console.log('res', res.data);
      setOneUser(res.data.getOtherUser);
    };
    fetchOneuser();
  }, [userId]);

  useEffect(() => {
    const fetchMypost = async () => {
      const mypost = await axios.get(`/post/${userId}`);

      setAllmypost(mypost.data.myPostList);
    };
    fetchMypost();
  }, [toggleUpdatePost, userId]);

  // spinner
  const { spinner } = useContext(SpinnerContext);
  const { myuser } = useContext(userContext);

  return (
    <div className={`w-full 2xl:container 2xl:mx-auto lg:flex justify-center ${darkBg}`}>
      {spinner && <Spinner />}
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden ">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="py-8 lg:px-8 px-0 mt-10">
            {/* personalProfile */}
            <TitleProfile oneUser={oneUser} />
            {/*end personalProfile */}

            {myuser?.id === oneUser?.id && <Line title="create post" />}
            {myuser?.id === oneUser?.id && <AddPost oneUser={oneUser} setToggleUpdatePost={setToggleUpdatePost} />}

            <Line title="news feed" />
            <FeedContainer allmypost={allmypost} setToggleUpdatePost={setToggleUpdatePost} />
          </div>
        </div>
        {/* <!-- Fixed sidebar --> */}
        <Chatbox />
      </div>
    </div>
  );
}

export default MyProfile;
