import React from 'react'
import Hero from '../components/Hero';
import WhyYouAreHereSection from '../sections/home/WhyYouAreHereSection';
import WhoWeAreSection from '../sections/home/WhoWeAreSection';
import ProgramsSection from '../sections/home/ProgramsSection';
import ProgramsSectionCopy from '../sections/home/ProgramsSectionCopy';
import LetsShow from '../sections/home/LetsShow';
import StepOneSection from '../sections/home/StepOneSection';
import ResultSection from '../sections/home/ResultSection';
import SuccessStories from '../sections/home/SuccessStories';
import ClinicLocation from '../sections/home/ClinicLocation';
import MarqueeHome from '../sections/home/MarqueeHome';
import BlogSection from '../sections/home/BlogSection';

function Home() {
   const data = {
    title: [
      { text: "Little Champs", class: "font-calvino" },
      { text: "therapy & yoga", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "We believe every child deserves a safe and supportive space to move, calm down and build healthy habits for life. That's why our kid-focused yoga therapy combines proven techniques with fun games. Kids learn to manage their feelings, understand themselves better and get stronger – all through yoga and therapy! ",
        class: "text-center",
      },
    ],
    btn:{
      text: "Register Now",
      link: "/apply",
    },
    slides: [
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
    ],
    textAlign:"text-center",
    spacing:"p-4"
  };
  const data2 = {
    title: [
      { text: "Ready to", class: "font-calvino" },
      { text: "see your little champ", class: "font-calvino-italic" },
      { text: "shine", class: "font-calvino" },
    ],
    paragraphs: [
      {
        text: "Let’s get started on your child’s journey to greater confidence, skills and joy. Book a free consultation today to chat about their unique needs and explore how our tailored therapy and yoga programs can make a real difference. Give your child the gift of support that’s as individual as they are!",
        class: "text-center",
      },
    ],
    btn:{
      text: "Contact Us",
      link: "/contact-us",
    },
    textAlign:"text-center",
    spacing:"p-4"
  };
  return (
    <div className='overflow-x-hidden overflow-y-scroll mt-[102px] md:mt-[128px]'>
     <Hero data={data}/> 
     <WhyYouAreHereSection data={data2} />
     <WhoWeAreSection />
     <ProgramsSection />
     <ProgramsSectionCopy />
     <LetsShow />
     <StepOneSection />
     <ResultSection />
     <SuccessStories />
     <ClinicLocation />
     <MarqueeHome />
     <Hero data={data2} />
     <BlogSection />
    </div>
  )
}

export default Home
