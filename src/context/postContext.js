import axios from '../config/axios';
import { createContext, useState, useContext } from 'react';
import { getToken } from '../service/localStorage';
import { AuthContext } from './authContext';
import { SpinnerContext } from './SpinnerContext';

const PostContext = createContext();
const PostContextProvider = ({ children }) => {
  const { spinner, setSpinner } = useContext(SpinnerContext);
  const { user } = useContext(AuthContext);
  const [toggleUpdatePost, setToggleUpdatePost] = useState(false);
  const [toggleStateComment, setToggleStateComment] = useState(false);

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

  // createPost -> addPost component
  const hdlSubmitCreatePost = async (infoCreatePost, picPost) => {
    // if (!infoCreatePost.message.trim()) return window.alert('pls input message');
    try {
      setSpinner(true);
      const formData = new FormData();
      formData.append('userId', user.id);
      formData.append('message', infoCreatePost.message);
      formData.append('status', infoCreatePost.status);
      formData.append('price', infoCreatePost.status === 'private' ? 60 : 0);
      picPost.forEach(item => formData.append('picPostUrl', item));
      await axios.post('/post', formData);
      setSpinner(false);
      togleReFeed();
    } catch (error) {
      window.alert(error);
    }
  };

  // del post -> Post component
  const hdlDeletePost = async currentPostId => {
    // console.log('delete post');
    try {
      await axios.delete(`/post/${currentPostId}`);
      togleReFeed();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        toggleStateComment,
        setToggleStateComment,
        hdlSubmitCreatePost,
        hdlDeletePost,
        getAllMyPost,
        hdlDeletePost,
        refreshFeed,
        setRefreshFeed,
        togleReFeed,
        setToggleUpdatePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostContextProvider };
