import React, { useState } from 'react'
import Heading from '../../components/Heading';
import { Link } from 'react-router-dom';

function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
    const data = {
        title: [
            { text: "Expanding your", class: "font-calvino" },
            { text: "Child’s potential", class: "font-calvino-italic" },
        ],
        textAlign: "md:text-end",
        spacing: "mb-4 lg:mb-10",
        fontSize: "h3  leading-tight",
        fontColor: "secondary-text-1",
        
    };
     const programs = [
    {
      number: "01.",
      title: "Music Therapy",
      description:
        "Music therapy is a fun and positive way to express emotions, communicate and interact with others through movement, melody and rhythm.",
      image: "care-5.jpg",
      bg: "#F9D9E4",
      link:"/programs/music-therapy"
    },
    {
      number: "02.",
      title: "Yoga Therapy",
      description:
        "We've seen how yoga therapy can really help kids. It's all about boosting their balance, focus and body awareness with some fun, slow movements and mindful breathing.",
      image: "care-6.jpg",
      bg: "#D4E9FF",
      link:"/programs/yoga-therapy"
    },
    {
      number: "03.",
      title: "Interactive Metronome",
      description:
        "We'll have fun with rhythm exercises to boost your child’s timing, focus and coordination, which will help us with concentration and motor planning.",
      image: "care-7.jpg",
      bg: "#FFEFD4",
      link:"/programs/interactive-metronome"
    },
    {
      number: "04.",
      title: "Tutoring",
      description:
        "We’ll help your child learn at their own pace with personalized support that matches their unique style, building confidence and mastering essential skills.",
      image: "care-8.jpg",
      bg: "#E0FFE6",
      link:"/programs/tutoring"
    },
  ];
  return (
    <section className="program-scetion w-full " >
      <div className="container-fixed">
        {/* Heading */}
        <div className="md:ms-auto"  data-aos="fade-up"> 
        <Heading data={data} className />
        </div>

        <p className="block lg:hidden body-t font-archivo mt-2  leading-[100%] body-t-color mb-10">
         We understand that every child is unique, with their own special way of learning and growing. That's why we offer a range of dedicated therapies and support services, delivered with a caring touch and tailored to nurture their individual potential.
        </p>

        {/* Mobile Image */}
        <img
          src={programs[activeIndex].image}
          alt="Program Image"
          className="rounded-lg w-full object-cover block lg:hidden mb-8"
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image Box - Desktop */}
          <div
            className="hidden lg:block rounded-lg transition-all duration-500 md:order-2"
            style={{
              backgroundColor: programs[activeIndex].bg,
            }}
          >
            <img
              src={programs[activeIndex].image}
              alt="Program"
              className="rounded-lg w-full object-cover transition duration-300"
            />
          </div>

          {/* Right Text & Boxes */}
          <div className='md:order-1'>
            <p className="body-t font-archivo  leading-[100%] body-t-color hidden lg:block ">
              We understand that every child is unique, with their own special way of learning and growing. That's why we offer a range of dedicated therapies and support services, delivered with a caring touch and tailored to nurture their individual potential.
            </p>

            <div className="mt-3">
              {programs.map((program, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-3 lg:p-6 gap-4 cursor-pointer transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-[#AE93FF] text-white"
                      : "hover:bg-[#AE93FF] group"
                  }`}
                >
                   <Link to={program.link} className="flex items-end justify-between ">
                  <div className="flex items-start gap-4">
                    <h3
                      className={` h4 font-archivo transition-colors ${
                        activeIndex === index
                          ? "text-white"
                          : "secondary-text-1"
                      }`}
                    >
                      {program.number}
                    </h3>
                    <div>
                      <h3
                        className={` h4 font-calvino transition-colors ${
                          activeIndex === index
                            ? "text-white"
                            : "secondary-text-1"
                        }`}
                      >
                        {program.title}
                      </h3>
                      <p
                        className={`body-t font-archivo mt-1 leading-5  transition-colors ${
                          activeIndex === index ? "text-white" : "body-t-color"
                        }`}
                      >
                        {program.description}
                      </p>
                    </div>
                  </div>
                  <i
                    className={`far fa-arrow-up h2 rotate-45 transition-colors ${
                      activeIndex === index ? "text-white" : "body-t-color"
                    }`}
                  ></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection
