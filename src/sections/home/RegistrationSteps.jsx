import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonPrimary from "../../components/ButtonPrimary";

function RegistrationSteps() {
  const steps = [
    {
      number: "1",
      title: "Registration",
      description: (
        <>
          <em className="font-calvino-italic text-xl inline-block mb-3">Welcome to the world of Little Champs!</em>
          <br />
          Please register using our safe online portal to start your adventure
          with us. This will enable us to collect all the data we need to give
          your child the best care possible. Remember to upload all necessary
          information when registering.
        </>
      ),
    },
    {
      number: "2",
      title: "Insurance & Billing",
      description:
        "Uploading your insurance and referral documents using the same site is the next step after creating your account. This guarantees that we can proceed without hiccups and verify your service coverage.",
    },
    {
      number: "3",
      title: "Evaluation",
      description:
        "Our administrative staff will get in touch with you to arrange for your child's initial evaluation, which can take place at our friendly clinic or in the convenience of your home, once we have received your referral, intake form and insurance information.",
    },
    {
      number: "4",
      title: "Scheduling ",
      description:
        "Our therapist will prepare a thorough report after the assessment and provide it to your child's pediatrician. We ensure to maintain the continuity of therapy sessions once your insurance has been accepted and allowed. Depending on what works best for your family.",
    },
  ];

  return (
    <section className="bg-[#AE93FF]  flex ">
      <div className="flex flex-col-reverse md:flex-row">
        {/* Left Side */}
        <div className="text-white md:w-[65%] px-[20px] pb-[50px] md:p-[50px]">
          {steps.map((step, index) => (
            <div key={index} className="mb-10 relative">
              <h2 className="h2 font-calvino border-b border-white/40 pb-2 mb-3">
                {step.title}
              </h2>
              <p className="text-white leading-relaxed text-base">{step.description}</p>

              {/* Step Number Circle */}
              {/* <div className="absolute -right-14 top-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-px h-16 bg-gradient-to-b from-pink-400 to-purple-500"></div>
                )}
              </div> */}
            </div>
          ))}

          {/* Button */}
          <div className="relative z-10">
            <ButtonPrimary link="/register" text="Register Now" />
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-[35%] bg-[#FFAFFF] md:p-[50px]">
         <div className="inner bg-[#AE93FF] w-full h-full flex items-center justify-center">
            {/* Basic React Slick slider with auto-rotating single image */}
            <Slider
              autoplay
              autoplaySpeed={2500}
              infinite
              arrows={false}
              dots={false}
              slidesToShow={1}
              slidesToScroll={1}
              className="w-full max-w-xs"
            >
              <div>
                <img
                  src="/ilus-1.jpg"
                  alt="Registration Step"
                  className=""
                />
              </div>
              <div>
                <img
                  src="/ilus-2.jpg"
                  alt="Registration Step"
                  className=""
                />
              </div>
              <div>
                <img
                  src="/ilus-3.jpg"
                  alt="Registration Step"
                  className=""
                />
              </div>
              <div>
                <img
                  src="/ilus-4.jpg"
                  alt="Registration Step"
                  className=""
                />
              </div>
            </Slider>
         </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationSteps;
