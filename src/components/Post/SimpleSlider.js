import React, { useState } from 'react';
import Slider from 'react-slick';
import iconLock from '../../images/iconLock.png';
import ImagePost from './ImagePost';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function SimpleSlider(props) {

  const { picUrl, status, isPurchase, isOwnerPost } = props;

  const [photoIdx, setPhotoIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full  my-5 relative " >
      {/* {status === 'private' && !isPurchase ? <div className="absolute  z-10 right-1/2 top-1/2  ">
        <img src={iconLock} className="origin-center transform translate-x-6 animate-pulse" />
      </div> : null
      } */}
      {isOwnerPost ? null :
        status === 'private' && !isPurchase ?
          <div className="absolute  z-10 right-1/2 top-1/2  ">
            <img src={iconLock}
              className="origin-center transform translate-x-6 animate-pulse" />
          </div>
          : null
      }

      <Slider {...settings}>
        {picUrl ?
          picUrl.map((item, idx) => <ImagePost idx={idx} isOwnerPost={isOwnerPost} isPurchase={isPurchase}
            setIsOpen={setIsOpen} setPhotoIdx={setPhotoIdx} picUrl={item} status={status}
          />) : null}
      </Slider>

      {isOpen && (
        <Lightbox
          mainSrc={picUrl[photoIdx]}
          nextSrc={picUrl[(photoIdx + 1) % picUrl.length]}
          prevSrc={picUrl[(photoIdx + picUrl.length - 1) % picUrl.length]}
          onCloseRequest={(e) => {
            e.preventDefault();
            setIsOpen(false);
            setPhotoIdx(0);
          }
          }
          onMovePrevRequest={() =>
            setPhotoIdx((photoIdx + picUrl.length - 1) % picUrl.length)
          }
          onMoveNextRequest={() =>
            setPhotoIdx((photoIdx + 1) % picUrl.length)
          }
        />
      )}
    </div >
  );
}

export default SimpleSlider;
