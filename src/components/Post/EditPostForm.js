import React, { useState, useContext } from 'react';
import axios from '../../config/axios';
import { DarkContext } from '../../context/DarkContext';

function EditPostForm(props) {
  const { setIsEdit, message, postId, setToggleUpdatePost } = props;
  const [newMsg, setNewMsg] = useState(message);

  // context
  const { dark } = useContext(DarkContext);

  // content from state

  const hdlClickSubmitEditMsg = async () => {
    try {
      const body = {
        message: newMsg,
      };
      await axios.put(`/post/${postId}`, body);
      setNewMsg(message);
      setIsEdit(false);
      setToggleUpdatePost(cur => !cur);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlChangeMsg = e => {
    setNewMsg(e.target.value);
  };

  const hdlClickCancel = () => {
    setNewMsg(message);
    setIsEdit(false);
  };

  return (
    <div
      className={`${dark ? 'dark-bg2-6' : ''} px-6 py-4 mx-6 bg-white rounded-2xl shadow-container flex flex-col
    animate-opa
    `}
    >
      <p className="capitalize font-light text-2xl mb-2">edit post</p>
      <textarea
        className={`${
          dark ? 'dark-bg2-6 placeholder-white' : 'placeholder-gray-500'
        } textInput w-full h-auto border rounded-2xl shadow-lg  mb-3
         border-red-400 p-3 focus:outline-none focus:ring-1 focus:ring-red-400 
        placeholder-opacity-75`}
        placeholder="what on your mind..."
        value={newMsg}
        onChange={hdlChangeMsg}
      />
      {/* btn grp */}
      <div className="flex self-end w-1/3">
        <button
          onClick={hdlClickCancel}
          className="capitalize w-1/2 rounded-full shadow-input py-1 text-lg whiteBtnHover text-red-400"
        >
          cancel
        </button>
        <button
          onClick={hdlClickSubmitEditMsg}
          className="capitalize w-1/2 rounded-full shadow-input py-1 ml-4 text-lg   bg-primary-grad text-white forhover"
        >
          edit
        </button>
      </div>
      {/*end btn grp */}
    </div>
  );
}

export default EditPostForm;
