import axios from '../config/axios';
import { createContext, useState, useContext } from 'react';
import { getToken } from '../service/localStorage';
import { AuthContext } from './authContext';
import { SpinnerContext } from './SpinnerContext';

const PostContext = createContext();
const PostContextProvider = ({ children }) => {
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const { user } = useContext(AuthContext);


  const [refreshFeed, setRefreshFeed] = useState(false);
  const togleReFeed = () => setRefreshFeed(cur => !cur);

  const getAllMyPost = async () => {
    try {
      const res = await axios.get(`/post/mypost`);
      // console.log(res.data);
      // setPostListByUserId(cur => ({ ...cur, ...res.data }));
    } catch (error) {
      console.log(error);
    }
  };

  // arr postList by UserId -> profile page
  const getPostByUserId = async userId => {
    // try {
    //   const res = await axios.get(`/post/${userId}`, {
    //     headers: { authorization: 'Bearer ' + getToken() }
    //   });
    //   setPostListByUserId(cur => ({ ...cur, ...res.data }));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // arr postList by follow list -> newsfeed page
  const getPostByFollow = async userId => {
    // try {
    //   const res = await axios.get(`/post/${userId}`, {
    //     headers: { authorization: 'Bearer ' + getToken() }
    //   });
    //   setPostListByUserId(cur => ({ ...cur, ...res.data }));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // createPost -> addPost component
  const hdlSubmitCreatePost = async (infoCreatePost, picPost) => {
    if (!infoCreatePost.message.trim()) return window.alert('pls input message');
    try {
      setSpinner(true);
      const formData = new FormData();
      formData.append("userId", user.id);
      formData.append("message", infoCreatePost.message);
      formData.append("status", infoCreatePost.status);
      picPost.forEach(item => formData.append("picPostUrl", item));
      await axios.post('/post', formData);
      // setNewPostInput(cur => ({
      //   ...cur,
      //   message: '',
      //   status: 'public',
      // }));
      setSpinner(false);
      // setPicPost([]);
      // setPreviewPicPost([]);
      togleReFeed();
    } catch (error) {
      window.alert(error);
    }
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
  const hdlDeletePost = async (currentPostId) => {
    console.log('delete post');
    try {
      await axios.delete(`/post/${currentPostId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        hdlSubmitCreatePost,
        hdlDeletePost,
        getPostByUserId,
        getPostByFollow,
        getAllMyPost,
        hdlEditPost,
        hdlDeletePost,
        refreshFeed,
        setRefreshFeed,
        togleReFeed,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostContextProvider };
