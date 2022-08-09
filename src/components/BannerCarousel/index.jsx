import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './index.scss';

function BannerCarousel({ data }) {
  return (
    <div className='banner'>
      <Carousel
        className='container'
        infiniteLoop
        autoPlay
        useKeyboardArrows
        centerMode
        showThumbs={false}
      >
        {data.map((banner, index) => {
          return (
            <div key={index}>
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default BannerCarousel;
