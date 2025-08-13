import React from "react";
import AboutSLider from "./AboutSlider";
import Hero from "./Hero";
import Heading from "./Heading";
import AboutSlider from "./AboutSlider";

export default function Vision() {
  const data = {
    title: [
      { text: "Lifted ", class: "font-calvino" },
      { text: " by Love", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "<b>Our vision</b> is to create a space where your child feels empowered, celebrated and deeply supported at every point of life. Every milestone is treated as a celebration whether it is big or small. We also believe every child carries a spark within themselves and to maintain it’s our joy to help that spark shine bright.",
        class: "text-center",
      },
      {
        text: "We don’t just offer therapy, we offer hope by being a helping hand for your family. With the power of love at the core of everything we do, we’re here to assist and nurture your child’s development so that they can blossom in their own beautiful way.",
        class: "text-center",
      },
    ],

    textAlign: "text-start",
    fontSize: "h1",
  };
  const imgData = [
  { src: "wh1.png", alt: "Therapy session 1" },
  { src: "wh2.png", alt: "Therapy session 2" },
  { src: "wh3.png", alt: "Therapy session 3" },
];
  return (
    <section className="relative bg-white py-16 ps-4 md:ps-8 overflow-x-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between ">
        {/* Background Mandala (optional) */}

        <div className="md:w-[70%]">
          {/* Content */}
          <div className="md:w-[80%] mx-auto relative z-10">
            <div className="mb-4" data-aos="fade-up">
              <Heading data={data} />
            </div>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
           <b>Our vision</b> is to create a space where your child feels empowered, celebrated and deeply supported at every point of life. Every milestone is treated as a celebration whether it is big or small. We also believe every child carries a spark within themselves and to maintain it’s our joy to help that spark shine bright.

            </p>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
             We don’t just offer therapy, we offer hope by being a helping hand for your family. With the power of love at the core of everything we do, we’re here to assist and nurture your child’s development so that they can blossom in their own beautiful way.

            </p>
            {/* <p className="mb-4" data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo.
            </p> */}
          </div>
        </div>
        <div className="w-full md:w-[30%] h-[377px] overflow-visible hidden md:block">
          <img
            src="mandala-full.png"
            alt="decorative mandala"
            className="max-w-[250px] md:max-w-[370px] ms-auto "
          />
        </div>
      </div>
     {/* Images */}
      <AboutSlider imgData={imgData} />
    </section>
  );
}
