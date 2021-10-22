import React from 'react';
import imgSlide1 from '../../mockData/image/slide1.jpg';
function ImagePost(props) {

  return (
    <>
      <div className="bg-red-500" >
        {/* if private  add className  filter  blur-3xl */}
        <img src={props.picUrl} className="w-full object-cover"
          style={{
            height: '500px'
          }}
        />
        {/* <img src={props.picUrl} className="w-full  filter  blur-3xl " /> */}
      </div>
    </>
  );
}

export default ImagePost;
