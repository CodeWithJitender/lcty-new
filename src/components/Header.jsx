import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import Arrow from "./Arrow";
const logo = "logo.png";
const profileImage = "sample.png";
const programsData = {
  "physical-therapy": {
    hero: {
      title: [
        { text: "Physical ", class: "font-calvino" },
        { text: " therapy", class: "font-calvino-italic" },
      ],
      description:
        "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: "Motor Skills", class: "font-calvino-italic" },
        ],
        description:
          "We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Increased Muscle ", class: "font-calvino" },
          { text: " Strength and Flexibility", class: "font-calvino-italic" },
        ],
        description:
          "Our programs incorporate exercises specifically designed to build muscle strength across different muscle groups. This increased strength provides the foundation for more complex movements and sustained physical activity. Simultaneously, we focus on improving flexibility and range of motion which is crucial for preventing injuries, enhancing posture and promoting ease of movement. A balance of strength and flexibility allows children to move more freely and comfortably.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Reduction in ", class: "font-calvino" },
          { text: " Pain and Discomfort", class: "font-calvino-italic" },
        ],
        description:
          "For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improvin g posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
      slides: [
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
      ],
    },
  },
  "occupational-therapy": {
    hero: {
      title: [
        { text: "Occupational ", class: "font-calvino" },
        { text: " therapy", class: "font-calvino-italic" },
      ],
      description:
        "Support your child to help and give ease in their day-to-day task like dressing, feeding and building independence through new and playful activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Occupational therapy offers invaluable support to children empowering them to navigate daily activities  with greater ease and independence. Through engaging and playful interventions, occupational therapists work collaboratively with children and their families to address challenges in areas such as dressing, feeding and participation in various life skills. The ultimate goal is to foster independence and enhance a child's overall quality of life.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Development and Refinement ", class: "font-calvino" },
          {
            text: "of Fine and Gross Motor Skills",
            class: "font-calvino-italic",
          },
        ],
        description:
          "Occupational therapy plays a crucial role in developing and refining both fine and gross motor skills. Fine motor skills involve the small muscles of the hands and fingers essential for tasks like writing, buttoning clothes, using utensils and manipulating small objects. Gross motor skills involve the larger muscles of the body, necessary for activities such as running, jumping, climbing and maintaining balance. Therapists utilize a variety of targeted activities and exercises to improve strength, coordination, dexterity and overall motor control enabling children to participate more fully in play, schoolwork and self-care tasks.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: " Emotional Regulation", class: "font-calvino-italic" },
        ],
        description:
          "Occupational therapy recognizes the significant interplay between physical abilities, sensory experiences and emotional well-being. Therapists employ strategies to help children understand and manage their emotions more effectively. This may involve teaching coping mechanisms for frustration, anxiety or anger as well as promoting self-awareness and self-control. By addressing underlying sensory sensitivities or processing difficulties that can contribute to emotional dysregulation, occupational therapy helps children develop greater emotional resilience and improve their social interactions.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Improvement of Sensory  ", class: "font-calvino" },
          { text: " Processing Abilities", class: "font-calvino-italic" },
        ],
        description:
          "Sensory processing refers to the way the nervous system receives, interprets and responds to sensory information from the environment. Children with sensory processing challenges may experience over- or under-responsiveness to stimuli such as sounds, lights, textures, tastes or movement. Occupational therapists conduct thorough assessments to identify specific sensory processing patterns and develop individualized strategies to help children better regulate and integrate sensory input. This may involve modifying the environment, providing sensory tools and activities and teaching adaptive strategies to promote comfort, focus and participation in daily routines and activities.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
      slides: [
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
      ],
    },
  },
  "speech-therapy": {
    hero: {
      title: [
        { text: "Speech ", class: "font-calvino" },
        { text: " therapy", class: "font-calvino-italic" },
      ],
      description:
        "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: "Motor Skills", class: "font-calvino-italic" },
        ],
        description:
          "We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Increased Muscle ", class: "font-calvino" },
          { text: " Strength and Flexibility", class: "font-calvino-italic" },
        ],
        description:
          "Our programs incorporate exercises specifically designed to build muscle strength across different muscle groups. This increased strength provides the foundation for more complex movements and sustained physical activity. Simultaneously, we focus on improving flexibility and range of motion which is crucial for preventing injuries, enhancing posture and promoting ease of movement. A balance of strength and flexibility allows children to move more freely and comfortably.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Reduction in ", class: "font-calvino" },
          { text: " Pain and Discomfort", class: "font-calvino-italic" },
        ],
        description:
          "For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improvin g posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
      slides: [
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
      ],
    },
  },
  "applied-behavior-analysis": {
    hero: {
      title: [
        { text: "Applied Behavior Analysis ", class: "font-calvino" },
        { text: " (ABA)", class: "font-calvino-italic" },
      ],
      description:
        "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: "Motor Skills", class: "font-calvino-italic" },
        ],
        description:
          "We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Increased Muscle ", class: "font-calvino" },
          { text: " Strength and Flexibility", class: "font-calvino-italic" },
        ],
        description:
          "Our programs incorporate exercises specifically designed to build muscle strength across different muscle groups. This increased strength provides the foundation for more complex movements and sustained physical activity. Simultaneously, we focus on improving flexibility and range of motion which is crucial for preventing injuries, enhancing posture and promoting ease of movement. A balance of strength and flexibility allows children to move more freely and comfortably.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Reduction in ", class: "font-calvino" },
          { text: " Pain and Discomfort", class: "font-calvino-italic" },
        ],
        description:
          "For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improvin g posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
      slides: [
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
    },
  },
  "music-therapy": {
    hero: {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " therapy", class: "font-calvino-italic" },
      ],
      description:
        "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: "Motor Skills", class: "font-calvino-italic" },
        ],
        description:
          "We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Increased Muscle ", class: "font-calvino" },
          { text: " Strength and Flexibility", class: "font-calvino-italic" },
        ],
        description:
          "Our programs incorporate exercises specifically designed to build muscle strength across different muscle groups. This increased strength provides the foundation for more complex movements and sustained physical activity. Simultaneously, we focus on improving flexibility and range of motion which is crucial for preventing injuries, enhancing posture and promoting ease of movement. A balance of strength and flexibility allows children to move more freely and comfortably.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Reduction in ", class: "font-calvino" },
          { text: " Pain and Discomfort", class: "font-calvino-italic" },
        ],
        description:
          "For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improvin g posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
      slides: [
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
        {
          title: "Physical Therapy",
          image: "therapy-1.jpg",
          redirectUrl: "/programs/physical-therapy",
          bgColor: "primary-bg-2",
          btnBg: "secondary-bg-1",
          btnText: "text-white",
        },
      ],
    },
  },
  "yoga-therapy": {
    hero: {
      title: [
        { text: "Yoga ", class: "font-calvino" },
        { text: " therapy", class: "font-calvino-italic" },
      ],
      description:
        "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: "Motor Skills", class: "font-calvino-italic" },
        ],
        description:
          "We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Increased Muscle ", class: "font-calvino" },
          { text: " Strength and Flexibility", class: "font-calvino-italic" },
        ],
        description:
          "Our programs incorporate exercises specifically designed to build muscle strength across different muscle groups. This increased strength provides the foundation for more complex movements and sustained physical activity. Simultaneously, we focus on improving flexibility and range of motion which is crucial for preventing injuries, enhancing posture and promoting ease of movement. A balance of strength and flexibility allows children to move more freely and comfortably.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Reduction in ", class: "font-calvino" },
          { text: " Pain and Discomfort", class: "font-calvino-italic" },
        ],
        description:
          "For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improvin g posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "therapy-3.jpg",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
      slides: [
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
      ],
    },
  },
  "interactive-metronome": {
    hero: {
      title: [
        { text: "Interactive ", class: "font-calvino" },
        { text: " metronome", class: "font-calvino-italic" },
      ],
      description:
        "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: "Motor Skills", class: "font-calvino-italic" },
        ],
        description:
          "We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Increased Muscle ", class: "font-calvino" },
          { text: " Strength and Flexibility", class: "font-calvino-italic" },
        ],
        description:
          "Our programs incorporate exercises specifically designed to build muscle strength across different muscle groups. This increased strength provides the foundation for more complex movements and sustained physical activity. Simultaneously, we focus on improving flexibility and range of motion which is crucial for preventing injuries, enhancing posture and promoting ease of movement. A balance of strength and flexibility allows children to move more freely and comfortably.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Reduction in ", class: "font-calvino" },
          { text: " Pain and Discomfort", class: "font-calvino-italic" },
        ],
        description:
          "For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improvin g posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Tutoring",
          image: "therapy-8.jpg",
          redirectUrl: "/programs/tutoring",
          bgColor: "primary-bg-2",
          btnBg: "secondary-bg-1",
          btnText: "text-white",
        },
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
      ],
    },
  },
  tutoring: {
    hero: {
      title: [{ text: "Tutoring ", class: "font-calvino" }],
      description:
        "Helping your child improve and increasea their strength and coordination so they can freely conduct their everyday activities.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    video: {
      title: [
        { text: "See how  ", class: "font-calvino" },
        { text: "physical therapy", class: "font-calvino-italic" },
        { text: "will help your child?", class: "font-calvino" },
      ],
      youtubeId:
        "https://www.youtube.com/embed/mZmV6Uss3MM?si=d0jpdGg_rm-gdnoc",
    },
    breif: {
      description:
        "Our dedicated approach focuses on helping your child develop and refine their strength and coordination enabling them to confidently and effortlessly participate in their daily routines and activities. We understand the importance of physical capabilities in a child's overall well-being and our programs are designed to foster significant improvements in these key areas.",
      image: [
        { src: "program-hero-1.png", alt: "Program image 1" },
        { src: "program-hero-2.png", alt: "Program image 2" },
        { src: "program-hero-3.png", alt: "Program image 3" },
      ],
      link: "",
    },
    benefits: [
      {
        img: "testmonial-3.png",
        title: [
          { text: "Enhancement of ", class: "font-calvino" },
          { text: "Motor Skills", class: "font-calvino-italic" },
        ],
        description:
          "We aim to significantly improve your child's gross and fine motor skills. This includes enhancing their balance, agility and overall body control. Through targeted activities and exercises, children develop greater precision and efficiency in their movements making everyday tasks such as running, jumping, writing and manipulating objects easier and more enjoyable. Improved motor skills contribute to increased independence and confidence in navigating their environment.",
      },
      {
        img: "testmonial-2.png",
        title: [
          { text: "Increased Muscle ", class: "font-calvino" },
          { text: " Strength and Flexibility", class: "font-calvino-italic" },
        ],
        description:
          "Our programs incorporate exercises specifically designed to build muscle strength across different muscle groups. This increased strength provides the foundation for more complex movements and sustained physical activity. Simultaneously, we focus on improving flexibility and range of motion which is crucial for preventing injuries, enhancing posture and promoting ease of movement. A balance of strength and flexibility allows children to move more freely and comfortably.",
      },
      {
        img: "testmonial-1.png",
        title: [
          { text: "Reduction in ", class: "font-calvino" },
          { text: " Pain and Discomfort", class: "font-calvino-italic" },
        ],
        description:
          "For children experiencing musculoskeletal pain or discomfort, our approach can play a vital role in pain reduction and management. By strengthening supporting muscles, improvin g posture and increasing flexibility, we aim to alleviate strain on joints and reduce the frequency and intensity of pain. This can lead to a significant improvement in your child's quality of life allowing them to participate more fully in activities without being limited by discomfort.",
      },
    ],
    provide: {
      title: [
        { text: "We ", class: "font-calvino" },
        { text: " provide", class: "font-calvino-italic" },
      ],
      slides: [
        {
          title: "Prematurity",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "100",
        },
        {
          title: "Muscular Dystrophy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "200",
        },
        {
          title: "Down Syndrome",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "300",
        },
        {
          title: "Spina Bifida",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "400",
        },
        {
          title: "Cerebral Palsy",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "500",
        },
        {
          title: "Stroke",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "600",
        },
        {
          title: "Hypertonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "700",
        },
        {
          title: "Hypotonia",
          image: "yoga-therapy.png",
          bgColor: "primary-bg-2",
          animationDelay: "800",
        },
      ],
    },
    therapies: {
      title: [
        { text: "More ", class: "font-calvino" },
        { text: " therapies", class: "font-calvino-italic" },
      ],
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
      ],
    },
  },
};
function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;

      const st = window.pageYOffset || document.documentElement.scrollTop;
      header.style.transform =
        st > lastScrollTop && st > 50 ? "translateY(-100%)" : "translateY(0)";
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Programs", path: "/programs" },
    { name: "Prospective Clients", path: "/prospective-clients" },
    { name: "Our Team", path: "/our-team" },
    { name: "Community Partners", path: "/community-partners" },
    // { name: "Locations", path: "/locations" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const Overlay = ({ children, onClose, side, btnSide }) => (
    <div className="h-[150vh] fixed inset-0 z-[100] p-3 bg-[#ffffffb2] ">
      <div
        className={`md:fixed ${side} w-full primary-bg-2 md:w-[500px] p-6 rounded-xl  text-white z-50`}
      >
        <button
          onClick={onClose}
          className={`md:top-4 ${btnSide} text-2xl flex items-center gap-2 nav-t rounded-[30px] pb-2`}
        >
          <span className="font-archivo">Close</span>

          <i
            class="fal fa-times primary-text-2 bg-white secondary-text-1 rounded-full w-10 h-10"
            style={{ lineHeight: "40px" }}
          ></i>
        </button>
        {children}
      </div>
    </div>
  );
  const navigate = useNavigate();
  const filteredPrograms = Object.entries(programsData).filter(
    ([key, program]) =>
      program.hero.title
        .map((t) => t.text.toLowerCase())
        .join("")
        .includes(searchTerm.toLowerCase())
  );
  return (
    <header className="w-full bg-white z-40" id="header">
      <div className="flex justify-between items-center px-3 md:px-6 py-4">
        <button
          onClick={() => setMenuOpen(true)}
          className="primary-bg-2 text-xl text-white rounded-full p-3"
        >
          <FaBars />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img
            src={`/${logo}`}
            alt="Logo"
            className="mx-auto h-[70px] md:h-[96px]"
          />
        </Link>
        <button
          onClick={() => setSearchOpen(true)}
          className="primary-bg-2 text-xl text-white rounded-full p-3"
        >
          <FaSearch />
        </button>
      </div>

      {menuOpen && (
        <Overlay
          onClose={() => setMenuOpen(false)}
          className="primary-bg-1"
          side={"left-4"}
          btnSide={"right-4"}
        >
          <div className="">
            <nav className="mt-20 space-y-7 nav-t font-archivo ">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block hover:underline body-t"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4 mt-10 justify-between items-center nav-t">
              <Link className="body-t">Location</Link>
              <div className="flex gap-2 secondary-text-1">
                <a
                  href=""
                  target="_blank"
                  className="bg-white flex justify-center items-center rounded-full  nav-t w-10 h-10"
                >
                  {" "}
                  <FaLinkedin className="" />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="bg-white flex justify-center items-center rounded-full  nav-t w-10 h-10"
                >
                  {" "}
                  <FaInstagram className="" />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="bg-white flex justify-center items-center rounded-full  nav-t w-10 h-10"
                >
                  {" "}
                  <FaFacebook className="" />
                </a>
              </div>
            </div>
            <div className="mt-6 h-60 relative">
              <img
                src={`/${profileImage}`}
                alt="Contact"
                className="rounded-lg w-full h-full object-cover"
              />
              <Link
                to="/contact-us"
                className="flex items-center mt-2 text-white  justify-between absolute bottom-0 w-full max-w-[100%] p-2 font-archivo font- nav-t"
                onClick={() => setMenuOpen(false)}
              >
                <span>Contact us</span> <Arrow />
              </Link>
            </div>
          </div>
        </Overlay>
      )}

      {searchOpen && (
        <Overlay
          onClose={() => setSearchOpen(false)}
          side={"right-4"}
          btnSide={"light-4"}
        >
          <div className="search-wrapper max-h-[566px] overflow-y-scroll pe-4">
            <div className="mt-5">
              <div className="flex items-center bg-white overflow-hidden rounded-[10px] p-2 pe-4">
                <input
                  type="text"
                  placeholder="Physical Therapy"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 text-black outline-none"
                  autoFocus
                />
                <button className="px-3 rounded-full secondary-bg-1 text-white w-10 h-10 flex justify-center items-center nav-t">
                  <FaSearch />
                </button>
              </div>
              {searchTerm && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-center mb-4">
                    Results
                  </h2>
                  {filteredPrograms.length > 0 ? (
                    <div className="space-y-2">
                      {filteredPrograms.map(([key, program]) => (
                        <Link
                          to={`/programs/${key}`}
                          key={key}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchTerm("");
                          }}
                          className="block p-3 bg-white text-black rounded hover:bg-gray-200"
                        >
                          {program.hero.title.map((part, i) => (
                            <span key={i} className={part.class}>
                              {part.text}
                            </span>
                          ))}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-red-500">
                      No programs found
                    </p>
                  )}
                </div>
              )}
              <h2 className="mt-6 text-lg font-semibold font-archivo text-center">
                Popular programs
              </h2>
              <div className=" gap-4 mt-4 overflow-x-auto grid grid-cols-2">
                {[
                  {
                    title: "Physical Therapy",
                    img: "therapy-1.jpg",
                    link: "/programs/physical-therapy",
                  },
                  {
                    title: "Occupational Therapy",
                    img: "therapy-2.jpg",
                    link: "/programs/occupational-therapy",
                  },
                ].map((program, idx) => (
                  <div
                    key={idx}
                    
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchTerm("");
                      navigate(program.link);
                    }}
                    className="search-card relative cursor-pointer text-black rounded-lg overflow-hidden  flex-shrink-0"
                  >
                    <img
                      src={`/${program.img}`}
                      alt={program}
                      className="w-full h-[150px] md:h-[300px] object-cover"
                    />
                    <div className="p-2 flex absolute bottom-0 w-full justify-between items-end font-archivo bg-[linear-gradient(180deg,_rgba(0,0,0,0)_50.31%,_rgba(0,0,0,0.35)_73.48%,_rgba(0,0,0,0.7)_100%)]">
                      <h3 className="text-sm font-bold text-white">
                        {program.title}
                      </h3>
                      <Arrow />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/programs"
                className="block mt-4 text-white text-end"
                onClick={() => setSearchOpen(false)}
              >
                View more ↗
              </Link>
            </div>
          </div>
        </Overlay>
      )}
    </header>
  );
}

export default Header;
