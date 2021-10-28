import React, { useState, useEffect, useContext } from 'react';
import ChatBox from '../myProfile/ChatBox';
import DropdownEditdelete from '../dropdown/DropdownEditdelete';
import SimpleSlider from './SimpleSlider';
import InputAddComment from './InputAddComment';
import ButtonPurchase from './ButtonPurchase';
import ProfilePicUi from '../ui/ProfilePicUi';
import Line from '../myProfile/Line';
import CommentsContainer from '../Post/CommentsContainer';
import EditPostForm from '../Post/EditPostForm';
import { timeStampDisplay } from '../../service/dateService';
import { DarkContext } from '../../context/DarkContext';
import axios from '../../config/axios';

function Post(props) {
  const { setToggleUpdatePost, data } = props;
  const { dark } = useContext(DarkContext);

  const [isEdit, setIsEdit] = useState(false);

  const [comment, setComment] = useState([]);
  const [toggleStateComment, setToggleStateComment] = useState(false);

  useEffect(() => {
    const fetchAllCommentInPost = async () => {
      const allComment = await axios.get(`/comment`);
      setComment(allComment.data.comment);
    };
    fetchAllCommentInPost();
  }, [toggleStateComment]);

  return (
    <div
      className={`lg:w-4/5 w-10/12 relative mx-auto
    my-16 py-6  rounded-3xl  
    ${data.status === 'public' ? 'shadow-container' : 'private'} ${dark ? 'dark-bg2' : ''}`}
    >
      {/* post section */}
      <div className="post-section">
        {/* display profile */}
        <div class="ml-14">
          <div class="absolute -left-8 -top-8">
            <ProfilePicUi beforeSize="24" afterSize="20" url={data?.User.profilePicture} id={data?.userId} />
          </div>

          {/* name and date */}
          <div className="pl-5">
            <p className="text-xl capitalize">{`${data?.User.firstName} ${data?.User.lastName}`}</p>
            <p className="text-sm text-gray-500">{timeStampDisplay(data?.createdAt)}</p>
          </div>
        </div>

        <button className="absolute right-5 top-3">
          <DropdownEditdelete setIsEdit={setIsEdit} postId={data.id} setToggleUpdatePost={setToggleUpdatePost} />
        </button>

        {/* content of post */}
        <div className="py-4">
          {/*condition rendering: message and editPost */}
          {isEdit ? (
            <EditPostForm content={data.message} setIsEdit={setIsEdit} />
          ) : (
            <p className="px-6">{data.message}</p>
          )}
          {/* picture use slick */}
          {data.picturePost ? <SimpleSlider picUrl={data?.picturePost} status={data?.status} /> : null}
        </div>
        {/*end content of post */}

        {/*  */}
        <div className="flex px-6">
          <div className="flex mr-4 items-center">
            {/* display recomment */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-8 w-8 mr-2 text-red-400"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-dark">145 recommend</p>
          </div>
          {/* display comment */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8 mr-2 text-blue-400"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-dark">12 comment</p>
          </div>
        </div>

        <Line />

        <CommentsContainer postId={data.id} comment={comment} />

        {/* button to Purchase */}
        <ButtonPurchase userId={data.userId} postId={data.id} price={data.price} />

        {/*end comment section */}

        <InputAddComment
          postId={data.id}
          profilePic={data?.User.profilePicture}
          setToggleStateComment={setToggleStateComment}
          userId={data?.User.id}
        />
      </div>
    </div>
  );
}

export default Post;
