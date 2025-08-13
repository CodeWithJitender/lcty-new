import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function TestimonialsSliderNew() {
  const data = [
    {
      id: 1,
      title: [
        { text: "Physical ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Glocal Edits",
      text1:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      img: "therapy-1.jpg",
      btnLink: "/programs/physical-therapy",
      isCenter: false,
    },
    {
      id: 2,
      title: [
        { text: "Occupational ", class: "font-calvino" },
        { text: "Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Head Field Solutions",
      text1:
        "Occupational therapy offers invaluable support to children empowering them to navigate daily activities  with greater ease and independence. Through engaging and playful interventions, occupational therapists work collaboratively with children and their families to address challenges in areas such as dressing, feeding and participation in various life skills. The ultimate goal is to foster independence and enhance a child's overall quality of life.",
      img: "therapy-2.jpg",
      btnLink: "/programs/occupational-therapy",
      isCenter: false,
    },
    {
      id: 3,
      title: [
        { text: "Speech ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Taste & Beyond",
      text1:
        "Speech therapy is a specialized field focused on assessing, diagnosing and treating communication and swallowing disorders across the lifespan. For individuals facing challenges with speech, language and social communication, speech therapy offers invaluable assistance in fostering clearer and more effective communication. This support extends to improving articulation, fluency, voice, resonance and overall language comprehension and expression. Furthermore, speech therapy addresses social communication skills, empowering individuals to engage more confidently and appropriately in various social settings ultimately enabling them to speak with assurance in public places.",
      img: "therapy-3.jpg",
      btnLink: "/programs/speech-therapy",
      isCenter: false,
    },
    {
      id: 4,
      title: [
        { text: "Applied Behavior Analysis ", class: "font-calvino" },
        { text: " (ABA)   ", class: "font-calvino-italic" },
      ],
      position: "~ArtifiQ",
      text1:
        "This resource outlines a comprehensive and systematically applied evidence-based strategy designed to foster the holistic development of children. By employing meaningful reinforcement techniques, this approach effectively cultivates positive behavior, essential social skills and consistent learning routines. The core principle revolves around creating a supportive and encouraging environment that motivates children to engage in desirable actions and internalize constructive patterns.",
      img: "therapy-4.jpg",
      btnLink: "/programs/applied-behavior-analysis",
      isCenter: false,
    },
    {
      id: 5,
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Glocal BPO",
      text1:
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      img: "therapy-5.jpg",
      btnLink: "/programs/music-therapy",
      isCenter: false,
    },
    {
      id: 6,
      title: [
        { text: "Yoga ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Glocal BPO",
      text1:
        "Yoga therapy offers a holistic approach to child development by thoughtfully integrating gentle, deliberate movements with mindful breathing techniques. This unique combination empowers children to cultivate balance, enhance their concentration skills and foster a deeper understanding of their own bodies, all within a fun and engaging framework. Through imaginative poses and playful activities, yoga therapy makes the journey of self-discovery an enjoyable experience for young learners.",
      img: "therapy-6.jpg",
      btnLink: "/programs/yoga-therapy",
      isCenter: false,
    },
    {
      id: 7,
      title: [
        { text: "Interactive  ", class: "font-calvino" },
        { text: " Metronome", class: "font-calvino-italic" },
      ],
      position: "~Glocal BPO",
      text1:
        "This innovative brain-targeted software utilizes engaging, rhythm-based exercises to significantly enhance crucial cognitive functions including timing, attention and coordination. By participating in these interactive activities, users can experience notable improvements in their ability to concentrate and effectively plan their motor movements.",
      img: "therapy-7.jpg",
      btnLink: "/programs/interactive-metronome",
      isCenter: false,
    },
    {
      id: 8,
      title: [
        { text: "Tutoring ", class: "font-calvino" },
      ],
      position: "~Glocal BPO",
      text1:
        "Our tutoring services offer personalized learning assistance meticulously tailored to your child's unique learning style. This individualized approach fosters a supportive environment where students can confidently reinforce and achieve mastery of critical academic skills at a pace that suits their individual needs. We believe in nurturing not only academic success but also a strong sense of self-efficacy in our students.",
      img: "therapy-8.jpg",
      btnLink: "/programs/tutoring",
      isCenter: false,
    },
  ];
  const sliderData = [
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
  ];
  const settings = {
    // className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="py-10">
      {data.map((d, i) => (
        <div key={d.id} className="rounded-2xl  cursor-grab px-3">
          <div className="relative overflow-hidden">
            <img
              src={d.img}
              className="parallax-img  w-full rounded-2xl object-cover  grayscale transition"
              alt={d.name}
            />
            <div className="px-2"></div>
            <div className="testimonial-text cursor-pointer rounded-lg absolute  bg-[#20202053] backdrop-blur-sm p-5">
              <h3 className="h2 text-white leading-none mb-3">
                {d.title.map((part, i) => (
                  <span key={i} className={part.class}>
                    {" "}
                    {part.text}{" "}
                  </span>
                ))}
              </h3>
              <div className="font-archivo text-white  mb-3">{d.text1}</div>
              {/* <div className="font-archivo text-white hidden md:block">{d.text2}</div> */}
              {/*  */}
              <Link to={d.btnLink}>
                <button className=" font-calvino-italic text-white mt-3">
                  <i className="fal fa-arrow-right"></i> Take me to the program
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
