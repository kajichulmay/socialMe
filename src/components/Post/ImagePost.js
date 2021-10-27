import React from 'react';
import Swal from 'sweetalert2';
function ImagePost(props) {
  const { picUrl, status, setPhotoIdx, setIsOpen, idx } = props;
  // const hdlClickOpenModalPicture = (src) => {
  //   if (props.status === 'private') return;
  //   Swal.fire({
  //     imageUrl: src,
  //     showConfirmButton: false,
  //     keydownListenerCapture: true
  //   });
  // };

  const hdlClickOpenModal = () => {
    if (props.status === 'private') return;
    setPhotoIdx(idx);
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-gray-500" >
        {/* if private  add className  filter  blur-3xl */}
        <img src={picUrl}
          className={`w-full object-cover ${status === 'private' ? 'blur' : ''}`}
          style={{
            height: '500px'
          }}
          onClick={hdlClickOpenModal}
        />
      </div>
    </>
  );
}

export default ImagePost;
