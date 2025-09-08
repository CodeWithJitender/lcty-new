import React from "react";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import ButtonPrimary from "../../components/ButtonPrimary";
import Heading from "../../components/Heading";
import TestimonialSlider from "./TestimonialSlider";

function SuccessStories() {
  const story = [
    {
      id: 1,
      title:
        "The biggest milestone I have notice is her ability to make social connections with the people around her. Also her ability to follow direction has improved. ",
      // link: "/story-1",
      image: "Story-1.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      id: 2,
      title:
        "We’ve been coming to Little Champs for two years, and the progress has been incredible. When my child first started, he wasn’t speaking at all. Thanks to the patient, loving, and caring team, he is now speaking in full sentences and asking questions. The staff is always pleasant and supportive, and we are so grateful for their dedication.",
      // link: "/story-2",
      image: "Story-2.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      id: 3,
      title: "Static Image Required",
      // link: "/story-3",
      image: "Story-3.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
  ];
  const data = {
    title: [
      { text: "Success ", class: "font-calvino" },
      { text: "Stories", class: "font-calvino-italic" },
    ],
    // paragraphs: [
    //   {
    //     text: "Every child's journey is unique, and we're so lucky to be a part of it. These inspiring success stories come from real families who've seen amazing transformations. Imagine brighter smiles, stronger skills and a new sense of confidence – all thanks to Little Champs Therapy & Yoga. We truly hope they uplift and encourage you as much as they do us!",
    //     class: "text-center",
    //   },
    // ],
    fontSize: "h3 ",
    textAlign: "text-center m-auto",
    spacing: "",
    // btn: {
    //   text: "Write Your Success Story",
    //   link: "/success-stories",
    // },
  };
  // const navigate = useNavigate();
  return (
    <section
      className="success-stories"
      style={{
        background:
          "linear-gradient(360deg, rgba(200, 182, 255, 0.3) 0%, rgba(255, 150, 255, 0) 100%)",
      }}
    >
      <div className="container-fixed">
        <Hero data={data} />
        {/* <div  className={`max-w-[1100px] font-archivo body-t m-auto text-center body-t-color   `} data-aos="fade-up" data-aos-delay="200">
              <p>Every child's journey is unique, and we're so lucky to be a part of it. These inspiring success stories come from real families who've seen amazing transformations. Imagine brighter smiles, stronger skills and a new sense of confidence – all thanks to Little Champs Therapy & Yoga. We truly hope they uplift and encourage you as much as they do us!</p>
            </div> */}
        <div className="">
          <div
            className="w-full text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* <ButtonPrimary link="https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps" text="Write Your Success Story" className="" /> */}
            {/* <ButtonPrimary
              link="/success-stories"
              text="Write Your Success Story"
              className=""
            /> */}
          </div>
        </div>
      <TestimonialSlider />

        <div className="story-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 items-stretch">
          {/* {story.map((item, index) => (
            <div
              key={item.id}
              className="h-full bg"
              data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div
                className="card  "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="card-img">
                  <img src={`/${item.image}`} className="w-full " alt="" />
                </div>
                <div className="card-title font-archivo text-white font-semibold p-3 absolute top-0 left-0 bg-gradient-to-b from-transparent to-black bg-opacity-50 h-full w-full flex items-end">
                  <p className="text-white">{item.title}</p>
                </div>
              </div>
            </div>
          ))} */}
          {/* <div data-aos="fade-right" data-aos-delay="300">
            <Card data={story[0]} />
          </div>
          <div className="relative sm:translate-y-[70%]">
            <Card data={story[1]} />
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <Card data={story[2]} />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
