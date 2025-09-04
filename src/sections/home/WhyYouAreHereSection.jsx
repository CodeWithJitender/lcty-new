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
gsap.registerPlugin(ScrollTrigger);

function WhyYouAreHereSection() {
  const containerRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => { 
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
      });
    });
    
  });
  const imageUrl = "Yoga3.png";
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
    responsive: [
      {
        breakpoint: 1280, // < 1280px
        settings: {
          slidesToShow: 1,
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
      { text: "Why ", class: "font-calvino" },
      { text: "you", class: "font-calvino-italic" },
      { text: "are here !", class: "font-calvino" },
    ],
    textAlign: "text-center md:text-start",
    spacing: "mb-4",
    fontSize: "h3",
  };
  return (
    <section className="pt-16 md:py-12 w-full overflow-x-hidden" ref={containerRef}>
      <div className="block lg:hidden" data-aos="fade-up">
        <Heading data={data} />
      </div>
      <div
        className=" mb-5  overflow-x-hidden"
      >
        {/* <Slider {...settings}>
          <div className="px-1">
            <img src="why-1.jpg" alt="Kids Yoga" className=" w-full" />
          </div>
          <div className="px-1">
            <img src="why-2.jpg" alt="Kids Yoga" className=" w-full" />
          </div>
          <div className="px-1">
            <img src="why-3.jpg" alt="Kids Yoga" className=" w-full" />
          </div>
        </Slider> */}
      </div>
      <div className="container-fixed relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="h-full">
            <Slider {...settings}>
          <div className="px-1 h-[450px]">
            <img src="wh1.png" alt="Kids Yoga" className=" w-full h-full object-cover object-center " />
          </div>
          <div className="px-1 h-[450px]">
            <img src="wh2.jpg" alt="Kids Yoga" className=" w-full h-full object-cover object-center " />
          </div>
          <div className="px-1 h-[450px]">
            <img src="wh3.jpeg" alt="Kids Yoga" className=" w-full h-full object-cover object-center " />
          </div>
        </Slider>
          </div>

          {/* Text Content */}
          <div className="why-text-content" >
            <div className="lg:block hidden">
              <Heading data={data} />
            </div>
            <p className="mb-5">
             You want to watch your child smile, try new things and grow, and sometimes that takes a little extra love and support to cater to their special needs. Maybe they need:



            </p>
            <ul className="space-y-3 mb-8">
              {[
                "patient support with speech or social skills,",
                "encouragement to grow their physical or fine-motor confidence, or",
                "gentle strategies to settle overwhelming emotions.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 body-t body-t-color"
                >
                  <span className="mt-1 w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
        We meet families where they are, with kindness and practical support that helps children shine.</p>

            <div className="mt-7">
              <ButtonPrimary link="https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps" text="Register Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyYouAreHereSection;
