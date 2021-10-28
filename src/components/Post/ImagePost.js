import React, { useState } from 'react';
function ImagePost(props) {
  const { picUrl, status, setPhotoIdx, isOwnerPost, setIsOpen, idx, isPurchase } = props;
  const [clientOnMouseDown, setClientOnMouseDown] = useState(null);

  const hdlClickOpenModal = () => {
    if (status === 'private' && !isPurchase) return;
    setPhotoIdx(idx);
    setIsOpen(true);
  };

  // save position onMouseDown
  const hdlOnMouseDown = e => {
    setClientOnMouseDown(cur => ({
      ...cur,
      x: e.clientX, y: e.clientY
    }));
    e.preventDefault();
  };

  const handleOnClick = e => {
    e.stopPropagation();
    // check mouse position before onClick
    if (clientOnMouseDown.x !== e.clientX ||
      clientOnMouseDown.y !== e.clientY) {
      e.preventDefault();
      return;
    }
    hdlClickOpenModal();
  };

  // console.log(clientOnMouseDown);

  return (
    <>
      <div className="bg-gray-500" >
        {/* if private  add className  filter  blur-3xl */}
        <img src={picUrl}
          className={`w-full object-cover
          ${isOwnerPost ? '' :
              status === 'private' && !isPurchase ? 'blur' : ''}`}
          style={{
            height: '500px'
          }}
          onMouseDown={hdlOnMouseDown}
          onClick={handleOnClick}
        />
      </div>
    </>
  );
}

export default ImagePost;
