import React from "react";
import AboutSLider from "./AboutSlider";
import Hero from "./Hero";
import Heading from "./Heading";
import AboutSlider from "./AboutSlider";

export default function Mission() {
  const data = {
    title: [
      { text: "Why", class: "font-calvino" },
      { text: "We Care", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Our mission is to provide personalized therapies to meet the needs of love where they are treated with respect and unwavering belief in their personal potential.",
        class: "text-center",
      },
      {
        text: "As we look after homes, schools, and communities where your child is safe and nurtured, we are dedicated to offering top-notch therapy that is easily accessible and comforting. Every session is based on developmental support thoroughly designed for your child's unique needs and guided by empathy. Above all, beautiful things happen when therapy is treated like love but wonderful things happen when therapy feels like love.",
        class: "text-center",
      },
    ],

    textAlign: "text-start",
    fontSize:"h1"
  };
  const imgData = [
  { src: "wh7.png", alt: "Therapy session 1" },
  { src: "wh5.png", alt: "Therapy session 2" },
  { src: "wh6.png", alt: "Therapy session 3" },
];

  return (
    <section className="relative bg-white py-16 pe-4 md:pe-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between ">
        {/* Background Mandala (optional) */}
       
         <div className="w-full md:w-[30%] h-[377px] overflow-visible hidden md:block">
          <img
            src="mandala-2-full.png"
            alt="decorative mandala"
            className="max-w-[250px] md:max-w-[350px] me-auto "
          />
        </div>
        <div className="md:w-[70%] ps-4">
          {/* Content */} 
          <div className="md:w-[80%] mx-auto relative z-10 ">
            <div className="mb-4" data-aos="fade-up">
            <Heading data={data} />
            </div>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="100"><b>Our mission</b> is to provide personalized therapies to meet the needs of love where they are treated with respect and unwavering belief in their personal potential.</p>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="200">As we look after homes, schools, and communities where your child is safe and nurtured, we are dedicated to offering top-notch therapy that is easily accessible and comforting. Every session is based on developmental support thoroughly designed for your child's unique needs and guided by empathy. Above all, beautiful things happen when therapy is treated like love but wonderful things happen when therapy feels like love.</p>
          </div>
        </div>
      </div>
      {/* Images */}
      <AboutSlider imgData={imgData} />

    </section>
  );
}
