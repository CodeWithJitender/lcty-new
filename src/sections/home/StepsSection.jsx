import React from "react";
import { UserCheck, Shield, ListChecks, CalendarDays } from "lucide-react"; // icons
import Hero from "../../components/Hero";
import Heading from "../../components/Heading";
import ButtonPrimary from "../../components/ButtonPrimary";

function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Registration",
      description:
        "This will enable us to collect all the data we need to give your child the best care possible.",
      icon: "/reg-1.png",
    },
    {
      number: "2",
      title: "Insurance & Billing",
      description:
        "This guarantees that we can proceed without hiccups and verify your service coverage.",
      icon: "/reg-2.png",
    },
    {
      number: "3",
      title: "Evaluation",
      description:
        "This guarantees that we can proceed without hiccups and verify your service coverage.",
      icon: "/reg-3.png",
    },
    {
      number: "4",
      title: "Scheduling",
      description:
        "Our therapist will prepare a thorough report after the assessment and provide it to your child's pediatrician.",
      icon: "/reg-4.png",
    },
  ];
  const data = {
    title: [
      { text: "A", class: "font-calvino" },
      { text: "Gentle Start", class: "font-calvino-italic" },
      { text: "Awaits", class: "font-calvino" },
    ],

    fontSize: "h1",
    textAlign: "text-center text-white m-auto",
    spacing: "",
    color: "text-white",
  };
  return (
    <section className="bg-[#AE93FF]  text-center">
      {/* Steps Grid */}
      <div className="container-fixed">
        <div className="mb-10" data-aos="fade-up">
          <Heading data={data} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6  mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="register-card relative  bg-[#fff] backdrop-blur-sm rounded-2xl p-6 text-white flex flex-col items-center justify-center shadow-lg"
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
            >
              {/* <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl"></div> */}

              <div className="w-full relative z-40 mb-4">
                <img src={step.icon} alt="" className=" max-w-[250px]" />
              </div>

              {/* Title */}
              <h3 className="relative z-40 text-xl font-serif mb-2 h4">
                {step.title}
              </h3>

              {/* Description */}
              <div className="relative text-xl z-10 leading-none">
                {step.description}
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-10 mt-10" data-aos="fade-up" data-aos-delay="400">
          <ButtonPrimary link="/register" text="Register Now" />
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
