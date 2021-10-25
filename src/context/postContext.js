import { user as initialUser } from '../service/localStorage';
import axios from '../config/axios';
import { createContext, useState } from 'react';
import { getToken } from '../service/localStorage';


const PostContext = createContext();
const PostContextProvider = ({ children }) => {
  // currentPost for edit and delete
  const [currentPostId, setCurrentPostId] = useState('');

  const [postListByUser, setPostListByUserId] = useState('');
  const [postListByFollow, setPostListByFollow] = useState('');

  // arr postList by UserId -> profile page
  const getPostByUserId = async (userId) => {
    try {
      const res = await axios.get(`/post/${userId}`, {
        headers: { authorization: 'Bearer ' + getToken() }
      });
      IdPostListByUserId(cur => ({ ...cur, ...res.data }));
    } catch (error) {
      console.log(error);
    }
  };


  // arr postList by follow list -> newsfeed page
  const getPostByFollow = async (userId) => {
    try {
      const res = await axios.get(`/post/${userId}`, {
        headers: { authorization: 'Bearer ' + getToken() }
      });
      setPostListByUserId(cur => ({ ...cur, ...res.data }));
    } catch (error) {
      console.log(error);
    }
  };


  // createPost -> addPost component
  const hdlSubmitCreatePost = async () => {
    console.log('create post');
    // try {
    //   const formData = new FormData();
    //   // formData.append("flightId", reserveInfoForSubmit.flightId);
    //   // formData.append("passengerId", reserveInfoForSubmit.passengerId);
    //   // formData.append("orderList", JSON.stringify(reserveInfoForSubmit.orderList));
    //   // formData.append("payslip", payslip);

    //   await axios.post(`/post`, formData, {
    //     headers: { authorization: 'Bearer ' + getToken() }
    //   });

    // } catch (error) {
    //   console.log(error);
    // }
  };

  // editPost -> editForm component
  const hdlEditPost = async () => {
    console.log('click edit post');

    // try {
    //   await axios.put(`/post/${currentPostId}`, 'somethingEdit', {
    //     headers: { authorization: 'Bearer ' + getToken() }
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // del post -> Post component
  const hdlDeletePost = async () => {
    console.log('delete post');
    // try {

    //   await axios.delete(`/post/${currentPostId}`, {
    //     headers: { authorization: 'Bearer ' + getToken() }
    //   });

    // } catch (error) {
    //   console.log(error);
    // }
  };




  return <PostContext.Provider value={{
    hdlSubmitCreatePost, hdlDeletePost,
    getPostByUserId, getPostByFollow,
    postListByUser, postListByFollow,
    hdlEditPost, hdlDeletePost
  }}>
    {children}
  </PostContext.Provider>;
};

export { PostContext, PostContextProvider };
