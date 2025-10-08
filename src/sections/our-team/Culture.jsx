import ButtonPrimary from "../../components/ButtonPrimary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const imageUrl = "Yoga3.png";

const Culture = () => {
  // const containerRef = useRef();
  // const contentRef = useRef();

  // useGSAP(() => {
  //   ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     start: "top top",
  //     end: "bottom bottom",
  //     pin: contentRef.current,
  //   });
  // });
  const settings = {
    centerMode: false,
    centerPadding: "60px", // optional: adjust padding around centered slide
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // default (large screen)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
    
  };
  return (
    <section
      className="bg-white culture-section py-[5vw] lg:py-[3vw]"
    >
      <h2 className="h1 mb-4 secondary-text-1 px-5 text-center block lg:hidden">
        <span className="font-calvino">Our Culture: </span>
        <span className="font-calvino-italic"> Yours is Ours </span>
      </h2>
      <div className="block lg:hidden mb-5 w-full overflow-x-hidden">
        <Slider {...settings}>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
        </Slider>
      </div>
      <div className="container-xxl pt-0 lg:pt-10  px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text Content */}
          <div className="" >
            <h2 className="h1 mb-4 secondary-text-1 hidden lg:block">
              <span className="font-calvino">Our Culture: </span>
              <span className="font-calvino-italic"> Yours is Ours </span>
            </h2>

            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              <b>We are a family that opens its heart to yours!</b>
            </p>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              We don’t see the children as clients. We see them as our Little
              Stars and their dreams, struggles and victories matter to us as
              deeply as they do to you. From the very first session, your child
              becomes a part of our extended family who is celebrated, cherished
              and supported at every step of the way.
            </p>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              As a happy, purpose-driven organization, we not only exist for
              profit but for progress, possibility and pure love. Every hug,
              high-five and breakthrough fills our hearts with joy because your
              child’s growth is our greatest reward.
            </p>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              By converting compassion into care and meaningful moments, we
              stand with the families and care about them helping to bring hope
              into their homes. Here, therapy is a sincere mission rather than
              merely a service.
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

            <div className="relative z-40">
              <ButtonPrimary link="discover" text="Register Now" />
            </div>
          </div>
          {/* Image */}
          <div className="hidden lg:block">
          <Slider {...settings}>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
        </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
