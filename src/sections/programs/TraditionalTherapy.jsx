import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function TraditionalTherapy() {
  const data = {
    title: [
      { text: "Traditional", class: "font-calvino" },
      { text: "therapy", class: "font-calvino-italic" },
    ],
    textAlign: "text-center",
    fontSize: "h1",
  };

  const testimonials = [
    {
      image: "testmonial-1.png",
      alt: "presentation",
      title: [
        { text: "Physical  ", class: "font-calvino" },
        { text: " Therapy", class: "font-calvino-italic" },
      ],
      text: "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/physical-therapy",
      },
    },
    {
      image: "testmonial-2.png",
      alt: "presentation",
      title: [
        { text: "Physical  ", class: "font-calvino" },
        { text: " Therapy", class: "font-calvino-italic" },
      ],
      text: "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/physical-therapy",
      },
    },
    {
      image: "testmonial-3.png",
      alt: "presentation",
      title: [
        { text: "Physical  ", class: "font-calvino" },
        { text: " Therapy", class: "font-calvino-italic" },
      ],
      text: "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/physical-therapy",
      },
    },
    {
      image: "testmonial-3.png",
      alt: "presentation",
      title: [
        { text: "Physical  ", class: "font-calvino" },
        { text: " Therapy", class: "font-calvino-italic" },
      ],
      text: "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/physical-therapy",
      },
    },
  ];
  return (
    <div className="traditional-therapy">
      <div className="container-fixed">
        <div className="max-w-7xl m-auto text-center secondary-text-1 ">
          <Heading data={data} />
          <p>
            Rooted deep in proven methods and principles of our traditional
            services offered by our trusted and reliable foundation. We try to
            blend and give a personal touch to our professional services to
            provide dependable solutions built on experience and a commitment to
            enduring quality
          </p>
        </div>

        <div className="testimonial-container max-w-7xl m-auto mt-10 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item rounded-3xl p-6 md:p-10 mb-10 sticky top-10`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-[150px] m-auto mb-14"
              />
              <div className="testimonial-text text-center mt-5">
                <h2 className="h2 text-center text-white max-w-4xl m-auto">
                  {testimonial.title.map((text, i) => (
                    <span key={i} className={text.class}>
                      {" "}
                      {text.text}{" "}
                    </span>
                  ))}
                </h2>
                <p className="text-white mt-4 body-t mb-10">{testimonial.text}</p>
                <Link to={testimonial.button.link}>
                  <button className="body-t font-calvino-italic text-white mt-5">
                    <i className={testimonial.button.iconClass}></i>{" "}
                    {testimonial.button.text}
                  </button>
                </Link>
              </div>
            </div>
          ))}
          {/* <div className="testimonial-item bg-[url('/testimonial-bg.png')]">
                <img src="testmonial-1.png" alt="presentation" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="testimonial-item">
                <img src="testmonial-1.png" alt="building" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="testimonial-item">
                <img src="testmonial-1.png" alt="meditation" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default TraditionalTherapy;
