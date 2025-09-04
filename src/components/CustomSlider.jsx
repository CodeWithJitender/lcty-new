import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomSlider({arrOfImages}) {
    const settings = {
    centerMode: false,
    centerPadding: "60px", // optional: adjust padding around centered slide
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1, // default (large screen)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
        // responsive: [
        //   {
        //     breakpoint: 1280, // < 1280px
        //     settings: {
        //       slidesToShow: 1,
        //       centerPadding: "40px",
        //     },
        //   },
        //   {
        //     breakpoint: 1024, // < 1024px
        //     settings: {
        //       slidesToShow: 2,
        //       centerPadding: "30px",
        //     },
        //   },
        //   {
        //     breakpoint: 640, // < 640px (mobile)
        //     settings: {
        //       slidesToShow: 1,
        //       centerPadding: "20px",
        //     },
        //   },
        // ],
  };
  return (
    <div>
      <Slider {...settings}>
        {arrOfImages.map((image, index) => (
          <div key={index}>
            <img src={image} className='w-full' alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CustomSlider