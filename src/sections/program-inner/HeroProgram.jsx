import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../../components/Hero";
import ButtonPrimary from "../../components/ButtonPrimary";


function HeroProgram({ data }) {
  console.log("HeroProgram data", data)
  const { title, description, image = [] } = data;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 3 seconds between slides
  };

  return (
    <section className="w-full">
      {/* Desktop Images */}
      <div className="hidden md:grid grid-cols-3  ">
        {image.map((img, index) => (
          <img key={index} src={`/${img.src}`} alt={img.alt} className="w-full h-full object-cover" />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...settings}>
          {image.map((img, index) => (
            <img
              key={index}
              src={`/${img.src}`}
              alt={img.alt}
              className="w-full h-64 object-cover"
            />
          ))}
        </Slider>
      </div>
      <div className="bg-hero-gradient">
        <div className="container-fixed">
          {/* Text Section */}
          <div className="max-w-5xl m-auto">
            <h1 className="h1 text-white text-center">
              {title.map((part, i) => (
                <span key={i} className={part.class}>
                  {" "}
                  {part.text}{" "}
                </span>
              ))}
            </h1>
            <p className="text-white text-center">{description}</p>
            <div className="flex justify-center mt-4">
              <ButtonPrimary link="/program" text={"Register Now"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProgram;
