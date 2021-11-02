import React, { useContext, useEffect, useState } from 'react';
import ChatBox from '../components/myProfile/ChatBox';
import AddPost from '../components/myProfile/AddPost';
import Line from '../components/myProfile/Line';
import FeedContainer from '../components/Post/FeedContainer';
import axios from '../config/axios';
import { SpinnerContext } from '../context/SpinnerContext';
import { useParams } from 'react-router-dom';
import { userContext } from '../context/userContext';
import PostNewfeedsContainer from '../components/Post/PostNewfeedsContainer';
import Spinner from '../components/spinner/Spinner';
import { DarkContext } from '../context/DarkContext';
function NewsFeed() {
  const [oneUser, setOneUser] = useState({});
  const [allPost, setAllPost] = useState([]);
  const [toggleUpdatePost, setToggleUpdatePost] = useState(false);
  const { spinner } = useContext(SpinnerContext);

  //context
  const { myuser, toggleFollwer } = useContext(userContext);
  const { dark, darkBg } = useContext(DarkContext);
  // fetch
  useEffect(() => {
    const fetchOneuser = async () => {
      const res = await axios.get(`/user/oneUser`);

      setOneUser(res.data.oneUser);
    };
    fetchOneuser();
  }, [myuser]);

  useEffect(() => {
    const fetchMypost = async () => {
      const res2 = await axios.get(`/post/all`);
      setAllPost(res2?.data?.allPost);
    };
    fetchMypost();
  }, [toggleUpdatePost, toggleFollwer]);
  // console.log(`allPost`, allPost);
  return (
    <div className={`w-full 2xl:container 2xl:mx-auto lg:flex justify-center ${darkBg}`}>
      {spinner && <Spinner />}
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden ">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="py-8 lg:px-8 px-0 mt-10">
            {/* feed container */}
            <Line title="Post someting About me" />
            <AddPost oneUser={oneUser} setToggleUpdatePost={setToggleUpdatePost} />
            <Line title="news feed" />
            <PostNewfeedsContainer allPost={allPost} setToggleUpdatePost={setToggleUpdatePost} />
            {/*news feed container */}
          </div>
        </div>
        {/* <!-- Fixed sidebar --> */}
        <ChatBox />
      </div>
    </div>
  );
}

export default NewsFeed;
