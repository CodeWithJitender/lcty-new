import React, { useState } from "react";
import Heading from "../../components/Heading";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeroSlider from "../../components/HeroSlider";
import { Link } from "react-router-dom";

function AllForm() {
  const headingData = {
    title: [
      { text: "Begin", class: "font-calvino" },
      { text: " your journey", class: "font-calvino-italic" },
      { text: " with us", class: "font-calvino" },
    ],
    textAlign: "text-center",
    spacing: "mb-8",
    fontSize: "h1",
    color: "secondary-text-1",
  };
  const slides = [
    {
      title: "Physical Therapy",
      image: "therapy-1.jpg",
      redirectUrl: "/programs/physical-therapy",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Occupational Therapy",
      image: "therapy-2.jpg",
      redirectUrl: "/programs/occupational-therapy",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Speech Therapy",
      image: "therapy-3.jpg",
      redirectUrl: "/programs/speech-therapy",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Applied Behavior Analysis (ABA)",
      image: "therapy-4.jpg",
      redirectUrl: "/programs/applied-behavior-analysis",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Music Therapy",
      image: "therapy-5.jpg",
      redirectUrl: "/programs/music-therapy",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Yoga Therapy",
      image: "therapy-6.jpg",
      redirectUrl: "/programs/yoga-therapy",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Interactive Metronome",
      image: "therapy-7.jpg",
      redirectUrl: "/programs/interactive-metronome",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Tutoring",
      image: "therapy-8.jpg",
      redirectUrl: "/programs/tutoring",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
  ];
  const modelData = [
    {
      title: "Policy Update 5.17.24",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Intake Form",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Intake Form (Espanol)",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "ABA Intake Form",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "ABA Intake Form (Espanol)",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Policy Update 5.17.24",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Intake Form",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Intake Form (Espanol)",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "ABA Intake Form",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "ABA Intake Form (Espanol)",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Policy Update 5.17.24",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Intake Form",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "Intake Form (Espanol)",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "ABA Intake Form",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
    {
      title: "ABA Intake Form (Espanol)",
      image: "forms-1.jpg",
      redirectUrl: "/",
    },
  ];
const [models, setModels] = useState();
  return (
    <div className="all-form-section  py-[5vw] lg:py-[3vw]">
      <div className="container-xxl">
        <div className="" data-aos="fade-up">
          <Heading data={headingData} />
        </div>
        <p
          className="max-w-[1200px] mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
           This application is your first step
          into our community and becoming a part of this lovely journey. We're
          thrilled to get to know more about you and have you along with us as
          we continue ahead. Ready to start something amazing?
        </p>
        <div
          className="flex justify-center mt-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="" onClick={() => setModels(!models)}>
            <ButtonPrimary link="" text="Open Form" />
          </div>
        </div>
      </div>
      <div className="mt-[4vw]" data-aos="fade-up" data-aos-delay="400">
        {slides && <HeroSlider slides={slides} />}
      </div>
      {models && <div className="model-wrapper h-screen fixed inset-0 z-[100] px-5 py-[4vw] bg-[#ffffffb2] ">
          <div className="model-container primary-bg-2 border-[5px] border-[#8A63FF] rounded-[30px] w-full max-w-[1200px] m-auto  pe-3 ">
            <div className="model-header flex items-center justify-between  p-5">
              <h1 className="h2 text-white">
                <span className="font-calvino">All </span>
                <span className="font-calvino-italic"> forms</span>
              </h1>
              <button
                className={`md:top-4 text-2xl flex items-center gap-2 nav-t rounded-[30px] pb-2`}
                onClick={() => setModels(!models)}
              >
                <span className="font-archivo text-white">Close</span>

                <i
                  class="fal fa-times primary-text-2 bg-white secondary-text-1 rounded-full w-10 h-10"
                  style={{ lineHeight: "40px" }}
                ></i>
              </button>
            </div>
            <div className="model-content max-h-[400px] md:max-h-[750px] overflow-y-auto">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 p-4">
                {modelData.map((item, index) => (
                  <div
                    key={index}
                    className="model-item group p-3 rounded-[30px] relative flex items-center justify-center cursor-pointer duration-300 overflow-hidden"
                    // className="model-item group  bg-[#8A63FF] border-[5px] border-[#FF96FF] p-3 rounded-[30px] overflow-hidden relative flex items-center justify-center cursor-pointer  duration-300"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={index * 100}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="model-img rounded-[18px]"
                    />
                    <Link
                      to={item.redirectUrl}
                      target="_blank"
                      className="opacity-0 w-full h-full absolute top-0 left-0 flex justify-center items-center backdrop-blur-sm group-hover:opacity-100 duration-300"
                    >
                      <img
                        src="pros-arrow.png"
                        className="max-w-12 max-h-12"
                        alt=""
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>}
    </div>
  );
}

export default AllForm;
