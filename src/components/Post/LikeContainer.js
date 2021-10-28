import React, { useContext, useState, useEffect } from 'react';
import axios from '../../config/axios';

import { userContext } from '../../context/userContext';

function LikeContainer({ likes, postId, isPublicAndPurchase, isOwnerPost, setToggleUpdatePost }) {
  const { myuser } = useContext(userContext);
  // const [likes, setLikes] = useState([]);
  // const [toggleRe, setToggleRe] = useState(false);

  const isLike = likes?.findIndex(item => myuser?.id === item?.userId);

  // useEffect(() => {
  //   const fetchLike = async () => {
  //     let res = await axios.get(`/like/${postId}`);
  //     setLikes(res.data.sumLike);
  //   };
  //   fetchLike();
  // }, [toggleRe]);

  const hdlClickAddLike = async postId => {
    await axios.post('/like', { postId });
    setToggleUpdatePost(cur => !cur);
    // setToggleRe(cur => !cur);
  };

  const hdlClickRemoveLike = async postId => {
    await axios.delete(`/like/${postId}`);
    setToggleUpdatePost(cur => !cur);
    // setToggleRe(cur => !cur);
  };

  return (
    <>
      <div className="flex mr-4 items-center">
        {isOwnerPost || isPublicAndPurchase ? (
          isLike === -1 ? (
            // add Like
            <svg
              onClick={() => hdlClickAddLike(postId)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          ) : (
            // remove Like
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-8 w-8 mr-2 text-red-400 cursor-pointer"
              onClick={() => hdlClickRemoveLike(postId)}
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          )
        ) : (
          // disable Like
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )}

        {/* {!isPublicAndPurchase ?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            :
            isLike === -1 ?
              <svg
                onClick={() => hdlClickAddLike(postId)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-400 cursor-pointer"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-8 w-8 mr-2 text-red-400 cursor-pointer"
                onClick={() => hdlClickRemoveLike(postId)}
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
          } */}

        <p className="text-dark ml-1">{likes?.length} recommend</p>
      </div>
    </>
  );
}

export default LikeContainer;
