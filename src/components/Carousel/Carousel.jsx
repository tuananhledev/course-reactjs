import React, { useRef } from 'react';
import Slider from 'react-slick';
import { GrNext, GrPrevious } from 'react-icons/gr';

import styles from './index.module.css';

const Carousel = ({ children }) => {
   const slickRef = useRef();

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
      <div className={styles.carousel}>
         <Slider ref={slickRef} {...settings}>
            {children}
         </Slider>
         <div className={styles.btnWrapper}>
            <div
               className={`${styles.button} ${styles.btnPrev} p-2`}
               onClick={() => slickRef?.current.slickPrev()}
            >
               <GrPrevious size={20} />
            </div>
            <div
               className={`${styles.button} ${styles.btnNext} p-2`}
               onClick={() => slickRef?.current.slickNext()}
            >
               <GrNext size={20} />
            </div>
         </div>
      </div>
   );
};

export default Carousel;
