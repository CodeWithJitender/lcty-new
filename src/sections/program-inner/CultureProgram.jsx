import ButtonPrimary from "../../components/ButtonPrimary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// const imageUrl = "Yoga3.png";

const CultureProgram = ({ data }) => {
  const { description, image = [], link } = data;
  const containerRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: contentRef.current,
    });
  });
  const settings = {
    // centerMode: true,
    // centerPadding: "60px", // optional: adjust padding around centered slide
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // default (large screen)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
    responsive: [
      {
        breakpoint: 1280, // < 1280px
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640, // < 640px (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <section className="bg-white" ref={containerRef}>
      <div className="container-fixed">
        {/* <h2 className="h1 mb-4 secondary-text-1 px-5  block lg:hidden">
          <span className="font-calvino">Love, </span>
          <span className="font-calvino-italic"> Strength </span>
          <span className="font-calvino"> & Warmth</span>
        </h2> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 items-start">
          {/* Image Content */}
          <div className="block w-full overflow-x-hidden md:order-2">
            <Slider {...settings}>
              {image.map((img, index) => (
                <div className="px-1">
                  <img
                    src={`/${img.src}`}
                    alt="Kids Yoga"
                    key={index}
                    className="w-full mb-5"
                  />
                </div>
              ))}
              <div className="px-1">
                {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
              </div>
              <div className="px-1">
                {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
              </div>
              <div className="px-1">
                {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
              </div>
            </Slider>
          </div>
          {/* Text Content */}
          <div className="md:order-1" ref={contentRef}>
            <h2 className="h1 mb-4 secondary-text-1 ">
              <span className="font-calvino">Our Culture: </span>
              <span className="font-calvino-italic"> Yours is Ours </span>
            </h2>

            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              {description}
            </p>

            {/* <ul className="space-y-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 body-t body-t-color"
                >
                  <span className="mt-1 w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </li>
              ))}
            </ul> */}

            <ButtonPrimary link="discover" text="Register Now" />
          </div>
          {/* Image */}
          {/* <div className="hidden lg:block">
            {image.map((img, index) => (
              <img
                src={`/${img.src}`}
                alt="Kids Yoga"
                key={index}
                className=" w-full mb-5"
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CultureProgram;
