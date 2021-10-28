import React, { useContext, useEffect, useState } from 'react';
import ChatBox from '../components/myProfile/ChatBox';
import AddPost from '../components/myProfile/AddPost';
import Line from '../components/myProfile/Line';
import FeedContainer from '../components/Post/FeedContainer';
import axios from '../config/axios';
import { useParams } from 'react-router-dom';
import { userContext } from '../context/userContext';
import PostNewfeedsContainer from '../components/Post/PostNewfeedsContainer';

function NewsFeed() {
  const [oneUser, setOneUser] = useState({});
  const [myPost, setMyPost] = useState([]);
  const [friendsPost, setFriendsPost] = useState([]);

  const all = { ...friendsPost.map((item, index) => item[]) };
  //context
  const { myuser } = useContext(userContext);
  // fetch
  useEffect(() => {
    const fetchOneuser = async () => {
      const res = await axios.get(`/user/oneUser`);

      setOneUser(res.data.oneUser);
    };
    fetchOneuser();
  }, []);

  useEffect(() => {
    const fetchMypost = async () => {
      const res2 = await axios.get(`/follow/getAllFollow`);
      const res = await axios.get(`/post/mypost`);
      setMyPost(res.data.myPostList);
      setFriendsPost(res2.data.allFollow.map(item => item.followera.Posts));
      // setFriendsPost(res2.data.allFollow.map(item => item.followera.Posts));
    };
    fetchMypost();
  }, []);

  console.log(`friendsPost`, friendsPost);
  console.log(`all`, all);

  return (
    <div className="w-full lg:flex justify-center h-screen ">
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden ">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="py-8 lg:px-8 px-0 mt-10">
            {/* feed container */}
            <Line title="EIEI" />
            <AddPost oneUser={oneUser} />
            <Line title="news feed" />
            {/* <PostNewfeedsContainer allPost={allPost} /> */}
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
