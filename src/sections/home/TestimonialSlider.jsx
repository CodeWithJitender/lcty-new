import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  const testimonials = [
    {
      quote:
        "We thought we were just hiring 3D modeling, turns out we got so much more. Glocal’s exterior renders nailed our brand’s bold, modern identity and the dynamic angles helped our marketing team create a brochure that boosted site visits by 40%. More than a project delivered, it was a success story in the making.",
      name: "Sophie Langford",
      role: "Brand Director",
    },
    {
      quote:
        "The attention to detail and creativity brought our vision to life. Our campaign had a massive impact thanks to their designs.",
      name: "David Parker",
      role: "Marketing Lead",
    },
    {
      quote:
        "Exceptional work that exceeded expectations. Truly a collaborative partner in our brand growth journey.",
      name: "Emma Wilson",
      role: "Creative Head",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className=" max-w-[1600px] mx-auto py-10 testi">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-6">
            <p className="text-lg md:text-2xl " >
              “{item.quote}”
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-archivo font-semibold mb-1">
                {item.name}
              </h4>
              <p className="text-sm font-archivo text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
