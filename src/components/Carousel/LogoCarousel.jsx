import React from 'react';
import './index.module.css';
import Slider from 'react-slick';

const LogoCarousel = ({ children }) => {
   let settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 1500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
      ],
   };
   return (
      <div>
         <Slider {...settings}>{children}</Slider>
      </div>
   );
};

export default LogoCarousel;
