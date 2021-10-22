import React from 'react';
import imgSlide1 from '../../mockData/image/slide1.jpg';
function ImagePost(props) {

  return (
    <div className=" outline-black">
      {/* if private  add className  filter  blur-3xl */}
      <img src={props.picUrl} className="object-cover" />
      {/* <img src={props.picUrl} className="w-full  filter  blur-3xl " /> */}
    </div>
  );
}

export default ImagePost;
