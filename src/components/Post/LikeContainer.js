import React, { useContext } from 'react';
import axios from '../../config/axios';
import { AuthContext } from '../../context/authContext';


function LikeContainer({ likes, postId, setToggleUpdatePost }) {
  const { user } = useContext(AuthContext);

  // console.log(likes);
  // console.log(user);

  const isLike = likes.findIndex(item => user.id === item.userId);

  // console.log(isLike === -1);


  const hdlClickAddLike = async (postId) => {
    await axios.post('/like', { postId });
    setToggleUpdatePost(cur => !cur);
  };

  const hdlClickRemoveLike = async (postId) => {
    console.log('remove like', postId);
    await axios.delete(`/like/${postId}`);
    setToggleUpdatePost(cur => !cur);
  };

  return (
    <>
      <div className="flex mr-4 items-center">
        {isLike === -1 ?
          <svg
            onClick={() => hdlClickAddLike(postId)}
            xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          :
          <svgs
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
          </svgs>
        }

        <p className="text-dark">{likes.length} recommend</p>
      </div>
    </>
  );
}

export default LikeContainer;
