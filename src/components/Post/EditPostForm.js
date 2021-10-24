import React from 'react';

function EditPostForm(props) {

  //  state: toggle editForm
  const { setIsEdit } = props;

  // content from state
  const { message } = props.content;
  return (
    <div className=" px-6 py-4 mx-6 bg-white rounded-2xl shadow-container flex flex-col">
      <p className="capitalize font-light text-2xl mb-2">edit post</p>
      <textarea
        className="textInput w-full h-auto border-2 rounded-2xl shadow-lg  mb-2
         border-red-400 p-3 focus:outline-none focus:ring-1 focus:ring-red-400 placeholder-gray-500
        placeholder-opacity-75"
        placeholder="what on your mind..."
        value={message}
      />
      {/* btn grp */}
      <div className="flex self-end w-1/3">
        <button
          onClick={() => setIsEdit(false)}
          className="capitalize w-1/2 rounded-full shadow-input py-1 text-lg  text-red-400">
          cancel
        </button>
        <button className="capitalize w-1/2 rounded-full shadow-input py-1 ml-4 text-lg   bg-primary-grad text-white forhover">
          Edit
        </button>
      </div>
      {/*end btn grp */}
    </div>
  );
}

export default EditPostForm;
