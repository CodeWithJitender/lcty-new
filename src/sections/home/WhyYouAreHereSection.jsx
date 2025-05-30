import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonPrimary from "../../components/ButtonPrimary";
import Heading from "../../components/Heading";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function WhyYouAreHereSection() {
      const containerRef = useRef();
    const contentRef = useRef();
  
    useGSAP(()=>{
      ScrollTrigger.create({
        trigger:containerRef.current,
        start:'top top',
        end:"bottom bottom",
        pin:contentRef.current
      })
    })
  const imageUrl = "Yoga3.png";
  const settings = {
    centerMode: true,
    centerPadding: "60px", // optional: adjust padding around centered slide
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // default (large screen)
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
  const data = {
    title: [
      {text: "Why ", class: "font-calvino"},
      {text: "you", class: "font-calvino-italic"},
      {text: "are here !", class: "font-calvino"},
    ],
    textAlign: "text-center md:text-start",
    spacing: "mb-4",
    fontSize: "h1",
  };
  return (
    <section className="bg-white pt-16 md:py-12 w-full overflow-x-hidden" ref={containerRef}>
      <div className="block lg:hidden" data-aos="fade-up">
        <Heading data={data} />
      </div>
      <div className="block lg:hidden mb-5 w-full overflow-x-hidden" data-aos="fade-up" data-aos-delay="100">
        <Slider {...settings}>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full" />
          </div>
        </Slider>
      </div>
      <div className="container-fixed relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="hidden lg:block">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>

          {/* Text Content */}
          <div className="why-text-content" ref={contentRef}>
            <div className="lg:block hidden">
              <Heading data={data} />
            </div>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo.{" "}
            </p>
            <ul className="space-y-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 body-t body-t-color"
                >
                  <span className="mt-1 w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </li>
              ))}
            </ul>

            <ButtonPrimary link="discover" text="Register Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyYouAreHereSection;
