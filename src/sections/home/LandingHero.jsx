import React from "react";
import Hero from "../../components/Hero";
import Heading from "../../components/Heading";
import ButtonPrimary from "../../components/ButtonPrimary";

function LandingHero() {
  const data = {
    title: [
      { text: "Little Champs", class: "font-calvino" },
      { text: "therapy & yoga", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Kids hold things we sometimes forget: big feelings, tiny worries, the kind of restlessness that looks like fidgeting but feels much deeper. We believe every child deserves a space that’s soft, steady and brave enough for all of that. Our kid-focused yoga therapy meets them where they are by using proven techniques wrapped in games and play, so they can move, settle and build healthy habits that stay with them long after class ends.",
        class: "text-center",
      },
    ],
    btn: {
      text: "Register Now",
      link: "https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps",
    },

    textAlign: "text-start",
    spacing: "pe-4",
    color: "text-white",
    fontSize: "h1",
  };
  const img1 = [
    "home-hero/hb-1.jpg",
    "home-hero/hb-2.jpg",
    "home-hero/hb-3.jpg",
    "home-hero/hb-4.jpg",
    "home-hero/hb-5.jpg",
    "home-hero/hb-6.jpg",
  ];
  const img2 = [
    "home-hero/hero11.jpeg",
    "home-hero/hero22.jpg",
    "home-hero/hb-9.jpg",
    "home-hero/hb-10.jpg",
    "home-hero/hb-11.jpg",
    "home-hero/hb-12.jpg",
  ];
  return (
    <div className="landing-hero bg-hero-gradient md:ps-[4vw] overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="landing-left px-4 flex flex-col justify-center items-start gap-4 lg:gap-8 py-[10vw] md:py-[6vw]">
          <Heading data={data} />
          <p className="text-white z-10">
          Kids hold things we sometimes forget: big feelings, tiny worries, the kind of restlessness that looks like fidgeting but feels much deeper. We believe every child deserves a space that’s soft, steady and brave enough for all of that. Our kid-focused yoga therapy meets them where they are by using proven techniques wrapped in games and play, so they can move, settle and build healthy habits that stay with them long after class ends.
          </p>
          <div className="relative z-10">
            <ButtonPrimary link={data.btn.link} text={data.btn.text} />
          </div>
          <img src="join.png" className="max-w-[350px] w-full z-10" alt="" />
        </div>
        <div className="landing-right hidden md:block md:translate-x-[20px]">
          {/* RIGHT: SCROLLING TWO COLUMNS OPPOSITE */}
          <div className="flex-1 h-[800px]  flex gap-4 ">
            {/* Left Column - Scroll Up */}
            <div className="flex-1 overflow-hidden relative ">
              <div className="absolute animate-scrollUp space-y-4">
                {img1.map((src, i) => (
                  <div key={i}>
                    <img
                      src={src}
                      alt={`img${i + 1}`}
                      className="rounded-xl w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Right Column - Scroll Down */}
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute animate-scrollDown space-y-4">
                {img2.map((src, i) => (
                  <div key={i}>
                    <img
                      src={src}
                      alt={`img${i + 1}`}
                      className="rounded-xl w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-col overflow-hidden  gap-4 ">
          {/* Left Column - Scroll Up */}
          <div className="flex-1 overflow-hidden relative ">
            <div className=" flex animate-scrollLeft space-y-4  gap-4 w-[300%]">
              {img1.map((src, i) => (
                <div key={i}>
                  <img
                    src={src}
                    alt={`img${i + 1}`}
                    className="rounded-xl flex-1 h-[200px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Left Column - Scroll Up */}
          <div className="flex-1 overflow-hidden relative ">
            <div className=" flex animate-scrollRight space-y-4  gap-4 w-[300%]">
              {img1.map((src, i) => (
                <div key={i}>
                  <img
                    src={src}
                    alt={`img${i + 1}`}
                    className="rounded-xl flex-1 h-[200px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
