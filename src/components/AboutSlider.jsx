import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AboutSlider({ imgData = [] }) {
  console.log(imgData)
 
  const sliderSettings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <Slider {...sliderSettings}>
        {imgData.map((img, index) => (
          <div className="px-5 h-[350px]" key={index}>
            <img
              src={typeof img === "string" ? img : img.src}
              alt={img.alt || `slide-${index}`}
              className="w-full"
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default AboutSlider

