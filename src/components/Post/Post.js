import React, { useState, useEffect, useContext } from 'react';
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
import LikeContainer from './LikeContainer';
import { user } from '../../service/localStorage';

function Post(props) {
  const { setToggleUpdatePost, data } = props;
  const { dark } = useContext(DarkContext);

  const [isEdit, setIsEdit] = useState(false);

  const [comment, setComment] = useState([]);
  const [toggleStateComment, setToggleStateComment] = useState(false);

  useEffect(() => {
    const fetchAllCommentInPost = async () => {
      const allComment = await axios.get(`/comment`);
      // console.log(allComment.data.comment);
      setComment(allComment.data.comment);
    };
    fetchAllCommentInPost();
  }, [toggleStateComment]);

  // Has user bought this post yet?
  const isPurchase = data?.OrderItemPosts?.findIndex(item => item.userId === user.id) > -1;

  const isPublicAndPurchase = data?.status === 'public' || isPurchase;

  const isOwnerPost = user?.id === data?.userId;

  // console.log(isOwnerPost);
  // console.log(isPurchase);
  // console.log('postId', data.id, data.status === 'public' || isPurchase);
  // console.log(data.status !== 'public');
  // console.log(data.status !== 'public' && isPurchase);

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
            <ProfilePicUi beforeSize="24" afterSize="20" url={data?.User?.profilePicture} id={data?.userId} />
          </div>

          {/* name and date */}
          <div className="pl-5">
            <p className="text-xl capitalize">{`${data?.User?.firstName} ${data?.User?.lastName}`}</p>
            <p className="text-sm text-gray-500">{timeStampDisplay(data?.createdAt)}</p>
          </div>
        </div>

        {isOwnerPost ? (
          <button className="absolute right-5 top-3">
            <DropdownEditdelete setIsEdit={setIsEdit} postId={data?.id} setToggleUpdatePost={setToggleUpdatePost} />
          </button>
        ) : null}

        {/* content of post */}
        <div className="py-4">
          {/*condition rendering: message and editPost */}
          {isEdit ? (
            <EditPostForm
              message={data?.message}
              postId={data?.id}
              setIsEdit={setIsEdit}
              setToggleUpdatePost={setToggleUpdatePost}
            />
          ) : (
            <p className="px-6">{data?.message}</p>
          )}
          {/* picture use slick */}
          {data?.picturePost ? (
            <SimpleSlider
              isOwnerPost={isOwnerPost}
              isPurchase={isPurchase}
              picUrl={data?.picturePost}
              status={data?.status}
            />
          ) : null}
        </div>
        {/*end content of post */}

        {/*  */}
        <div className="flex px-6">
          {/* display recomment */}
          <LikeContainer
            setToggleUpdatePost={setToggleUpdatePost}
            isOwnerPost={isOwnerPost}
            postOwnerId={data?.userId}
            likes={data.Likes}
            isPublicAndPurchase={isPublicAndPurchase}
            likes={data?.Likes}
            postId={data?.id}
          />
          {/* display amount comment */}
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
            <p className="text-dark">{`${comment.filter(item => item.postId === data?.id).length}
              comment`}</p>
          </div>
        </div>

        <Line />
        {isPublicAndPurchase || isOwnerPost ? (
          <>
            <CommentsContainer postId={data.id} comment={comment} setToggleStateComment={setToggleStateComment} />
            <InputAddComment postId={data.id} setToggleStateComment={setToggleStateComment} />
          </>
        ) : (
          <ButtonPurchase
            userId={data.userId}
            postId={data.id}
            price={data.price}
            setToggleUpdatePost={setToggleUpdatePost}
          />
        )}
      </div>
    </div>
  );
}
export default Post;
