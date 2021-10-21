import React from 'react';
import Slider from 'react-slick';
import iconLock from '../../images/iconLock.png';
import ImagePost from './ImagePost';
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full  mt-5 mb-5 outline-black relative ">
      <div className="absolute  z-20 right-1/2 top-1/2  ">
        <img src={iconLock} className="origin-center transform translate-x-6 animate-pulse" />
      </div>
      <Slider {...settings}>
        <ImagePost />
        <ImagePost />
        <ImagePost />
        <ImagePost />
        <ImagePost />
        <ImagePost />
        <ImagePost />
        {/* <div className="w-full ">
          <img src={imgSlide1} className="w-full" />
        </div>
        <div className="w-full ">
          <img src={imgSlide2} className="w-full" />
        </div>
        <div className="w-full ">
          <img src={imgSlide3} className="w-full" />
        </div>
        <div className="w-full ">
          <img src={imgSlide4} className="w-full" />
        </div> */}
        {/* <div className="w-full outline-black">
          <img src={imgSlide1} className="w-full" />
        </div>
        <div className="w-full outline-black">
          <img src={imgSlide1} className="w-full" />
        </div> */}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
