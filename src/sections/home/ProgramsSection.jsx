import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";

function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = {
    title: [
      { text: "Caring for Your Child,", class: "font-calvino" },
      { text: "Covered by You", class: "font-calvino-italic" },
    ],
    textAlign: "text-left",
    spacing: "mb-4 lg:mb-10",
    fontSize: "h3 leading-tight",
    fontColor: "secondary-text-1",
  };

  const programs = [
    {
      number: "01.",
      title: "Physical Therapy",
      description:
        "We're here to help your child get stronger and more coordinated so they can do everyday things with ease.",
      image: "pt2.jpg",
      bg: "#F9D9E4",
      link: "/programs/physical-therapy",
    },
    {
      number: "02.",
      title: "Occupational Therapy",
      description:
        "We can help your child with everyday tasks like getting dressed and eating and encourage independence through fun, new activities.",
      image: "ot1.jpg",
      bg: "#D4E9FF",
      link: "/programs/occupational-therapy",
    },
    {
      number: "03.",
      title: "Speech Therapy",
      description:
        "We can help children communicate better by boosting their speech, language and social skills so they can speak confidently in public.",
      image: "st-h.jpeg",
      bg: "#FFEFD4",
      link: "/programs/speech-therapy",
    },
    {
      number: "04.",
      title: "Applied Behavior Analysis ",
      description:
        "We can help kids build positive behavior, social skills and learning routines through meaningful encouragement while keeping things systematic and evidence-based.",
      image: "aba2.png",
      bg: "#E0FFE6",
      link: "/programs/applied-behavior-analysis",
    },
  ];

  // Auto-change activeIndex every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % programs.length);
    }, 5000); // 5s

    return () => clearInterval(interval); // cleanup
  }, [programs.length]);

  return (
    <section className="program-section w-full ">
      <div className="container-fixed">
        {/* Heading */}
        <div data-aos="fade-up">
          <Heading data={data} />
        </div>

        {/* <p className="block lg:hidden body-t font-archivo mt-2 leading-[100%] body-t-color mb-10">
          Want to help your child imagine and find cool new things? Little
          Champs has great programs for helping them learn and grow. Plus,
          signing up online is super easy!
        </p> */}

        {/* Mobile Image */}
        <img
          src={programs[activeIndex].image}
          alt="Program Image"
          className="rounded-lg w-full  h-[400px] md:h-[620px]  object-cover object-top block lg:hidden mb-8"
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image Box - Desktop */}
          <div
            className="hidden lg:block rounded-lg transition-all duration-500 h-[400px] md:h-[620px] "
            style={{
              backgroundColor: programs[activeIndex].bg,
            }}
          >
            <img
              src={programs[activeIndex].image}
              alt="Program"
              className="rounded-lg w-full  h-[400px] md:h-[620px]  object-cover transition duration-300"
            />
          </div>

          {/* Right Text & Boxes */}
          <div>
            {/* <p className="body-t font-archivo body-t-color hidden lg:block">
              Want to help your child imagine and find cool new things? Little
              Champs has great programs for helping them learn and grow. Plus,
              signing up online is super easy!
            </p> */}

            <div className="mt-3">
              {programs.map((program, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-3 lg:p-4 cursor-pointer transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-[#AE93FF] text-white"
                      : "hover:bg-[#AE93FF] group"
                  }`}
                >
                  <Link
                    to={program.link}
                    className="flex items-end justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <h3
                        className={`h4 hidden xl:block font-archivo transition-colors ${
                          activeIndex === index
                            ? "text-white"
                            : "secondary-text-1"
                        }`}
                      >
                        {program.number}
                      </h3>
                      <div>
                        <h3
                          className={`h4 font-calvino transition-colors ${
                            activeIndex === index
                              ? "text-white"
                              : "secondary-text-1"
                          }`}
                        >
                          {program.title}
                        </h3>
                        <p
                          className={`body-t font-archivo mt-1 leading-5 transition-colors ${
                            activeIndex === index
                              ? "text-white"
                              : "body-t-color"
                          }`}
                        >
                          {program.description}
                        </p>
                      </div>
                    </div>
                    <i
                      className={`far fa-arrow-up h2 rotate-45 transition-colors ${
                        activeIndex === index
                          ? "text-white"
                          : "body-t-color"
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

export default ProgramsSection;
