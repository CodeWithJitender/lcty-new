import React from "react";
import Number from "../../components/Number";
import JourneyCard from "../../components/JourneyCard";

const steps = [
  {
    year: "2019",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "We began offering therapy and yoga services out in the community—bringing support right where people needed it.",
    image: "wh1.png",
  },
  {
    year: "2020",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "We opened our first office in Boca Raton to have a dedicated space for our clients.",
    image: "wh2.png",
  },
  {
    year: "2021",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "We expanded to West Palm Beach so more people could drop in for sessions.",
    image: "wh3.png",
  },
  {
    year: "2022",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Our Delray Beach location opened its doors, making it even easier to access our programs.",
    image: "journey-3.jpg",
  },
  {
    year: "2023",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Coral Springs became our newest neighborhood spot—another place to practice wellness together.",
    image: "journey-3.jpg",
  },
  {
    year: "2023",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "We added ABA therapy to our services to better support individuals with autism.",
    image: "journey-3.jpg",
  },
  {
    year: "2024",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "We introduced Music IM and Yoga Therapy, combining creative movement and sound to help minds and bodies feel their best.",
    image: "journey-3.jpg",
  },
];

export default function OurJourney() {
  return (
    <section className="py-16 ">
      {/* Title */}
      <h2
        className="h1 secondary-text-1 leading-none text-center mb-16"
        data-aos="fade-up"
      >
        <span className="font-calvino">Our </span>
        <span className="font-calvino-italic">journey</span>
      </h2>

      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up"  >
            <Number number="1" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[0]} />
            </div>
            <div className="journey-img md:w-[40%] h-[300px] ">
              <img src="wh1.png" alt="" className="w-full h-full object-cover object-bottom " />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="100"> 
            <Number number="2" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-5">
            <div className="journey-img md:w-[40%] h-[300px]">
              <img src="wh2.png" alt="" className="w-full h-full object-cover object-top " />
            </div>
            <div className="md:w-[40%]" data-aos="fade-left">
              <JourneyCard data={steps[1]} />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="200"> 
            <Number number="3" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[2]} />
            </div>
            <div className="journey-img md:w-[40%] h-[300px]">
              <img src="wh3.png" alt="" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="300"> 
            <Number number="4" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-5">
            <div className="journey-img md:w-[40%] h-[300px]">
              <img src="wh4.png" alt="" className="w-full h-full object-cover object-top" />
            </div>
            <div className="md:w-[40%]" data-aos="fade-left">
              <JourneyCard data={steps[3]} />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="400"> 
            <Number number="5" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[4]} />
            </div>
            <div className="journey-img md:w-[40%] h-[300px]">
              <img src="wh8.png" alt="" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="500"> 
            <Number number="6" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-5">
            <div className="journey-img md:w-[40%] h-[300px]">
              <img src="wh3.png" alt="" className=" w-full h-full object-cover object-center" />
            </div>
            <div className="md:w-[40%]" data-aos="fade-left">
              <JourneyCard data={steps[5]} />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="600">  
            <Number number="7" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[6]} />
            </div>
            <div className="journey-img img-last md:w-[40%] h-[300px]">
              <img src="wh7.png" alt="" className=" w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
 
    </section>
  );
}
