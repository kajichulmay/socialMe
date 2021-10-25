import React, { useContext } from 'react';
import Chatbox from '../components/myProfile/ChatBox';
import AddPost from '../components/myProfile/AddPost';
import Line from '../components/myProfile/Line';
import TitleProfile from '../components/myProfile/TitleProfile';
import FeedContainer from '../components/Post/FeedContainer';
import Spinner from '../components/spinner/Spinner';
import { SpinnerContext } from '../context/SpinnerContext';
function MyProfile() {
  const { spinner } = useContext(SpinnerContext);

  return (
    <div className="w-full lg:flex justify-center h-screen ">
      {spinner && <Spinner />}
      {/* <!-- Scroll wrapper --> */}
      <div class="w-full flex overflow-hidden ">
        {/* <!-- Scrollable container --> */}
        <div class="w-full overflow-y-scroll">
          <div class="py-8 lg:px-8 px-0 mt-10">
            {/* personalProfile */}
            <TitleProfile />
            {/*end personalProfile */}

            <Line title="create post" />
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
