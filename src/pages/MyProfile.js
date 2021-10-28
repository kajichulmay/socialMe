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
function MyProfile() {
  // state
  const [oneUser, setOneUser] = useState({});
  const [allmypost, setAllmypost] = useState([]);
  const [toggleUpdatePost, setToggleUpdatePost] = useState(false);
  // params
  const params = useParams();
  const { userId } = params;
  console.log('params', params);

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
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full lg:flex justify-center h-screen ">
      {spinner && <Spinner />}
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden outline-black">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="py-8 lg:px-8 px-0 mt-10">
            {/* personalProfile */}
            <TitleProfile oneUser={oneUser} />
            {/*end personalProfile */}

            {user?.id === oneUser?.id && <Line title="create post" />}
            {user?.id === oneUser?.id && <AddPost oneUser={oneUser} setToggleUpdatePost={setToggleUpdatePost} />}

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
