import React from 'react';
import imgSlide1 from '../../mockData/image/slide1.jpg';
function ImagePost() {
  return (
    <div className="w-full ">
      {/* if private  add className  filter  blur-3xl */}
      <img src={imgSlide1} className="w-full  filter  blur-3xl " />
    </div>
  );
}

export default ImagePost;
