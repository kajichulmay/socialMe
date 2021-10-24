import React from 'react';
import Slider from 'react-slick';
import iconLock from '../../images/iconLock.png';
import ImagePost from './ImagePost';

function SimpleSlider(props) {

  const { picUrl } = props;
  // console.log(picUrl);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };


  return (
    <div className="w-full  my-5 relative ">
      {/* <div className="absolute  z-10 right-1/2 top-1/2  ">
        <img src={iconLock} className="origin-center transform translate-x-6 animate-pulse" />
      </div> */}

      <Slider {...settings}>
        {picUrl ?
          picUrl.map(item => <ImagePost picUrl={item} />) : null}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
