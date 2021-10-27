import React, { useState } from 'react';
import axios from '../../config/axios';

function EditPostForm(props) {

  //  state: toggle editForm
  const { setIsEdit, message } = props;

  const initialMsg = message;
  const [newMsg, setNewMsg] = useState(initialMsg);

  // content from state

  // const hdlClickSubmitEditMsg = async () => {
  //   await axios.put()
  // };

  const hdlChangeMsg = (e) => {
    setNewMsg(e.target.value);
  };

  const hdlClickCancel = () => {
    setNewMsg(initialMsg);
    setIsEdit(false);
  };

  return (
    <div className=" px-6 py-4 mx-6 bg-white rounded-2xl shadow-container flex flex-col
    animate-opa
    ">
      <p className="capitalize font-light text-2xl mb-2">edit post</p>
      <textarea
        className="textInput w-full h-auto border rounded-2xl shadow-lg  mb-3
         border-red-400 p-3 focus:outline-none focus:ring-1 focus:ring-red-400 placeholder-gray-500
        placeholder-opacity-75"
        placeholder="what on your mind..."
        value={newMsg}
        onChange={hdlChangeMsg}
      />
      {/* btn grp */}
      <div className="flex self-end w-1/3">
        <button
          onClick={hdlClickCancel}
          className="capitalize w-1/2 rounded-full shadow-input py-1 text-lg whiteBtnHover text-red-400">
          cancel
        </button>
        <button className="capitalize w-1/2 rounded-full shadow-input py-1 ml-4 text-lg   bg-primary-grad text-white forhover">
          edit
        </button>
      </div>
      {/*end btn grp */}
    </div>
  );
}

export default EditPostForm;
