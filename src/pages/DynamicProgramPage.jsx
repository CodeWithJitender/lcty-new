import React from "react";
import { useParams } from "react-router-dom";
import ProgramInner from "./ProgramInner";

function DynamicProgramPage() {

       
const programsData = {
    "physical-therapy": {
      hero: {
        title: [
          { text: "Physical ", class: "font-calvino" },
          { text: " therapy", class: "font-calvino-italic" },
        ],
        description:
          "We're here to help your child get stronger and more coordinated so they can do everyday things with ease.",
        image: [
          { src: "sen1.png", alt: "Program image 1" },
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
          "https://www.youtube.com/embed/Zf-ETdDwLRc?si=G2JTwD7LdNkIEyq8",
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
            "We help your child develop their gross and fine motor skills with exciting activities. This means they'll get better at things like balance, agility, precision, and body control, which will make them more independent and confident in everyday activities like running, writing, and playing.",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Increased Muscle ", class: "font-calvino" },
            { text: " Strength and Flexibility", class: "font-calvino-italic" },
          ],
          description:
            "Our programs build muscle strength across different groups, improving flexibility and range of motion. This balance prevents injuries, enhances posture, and promotes ease of movement for children.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Reduction in ", class: "font-calvino" },
            { text: " Pain and Discomfort", class: "font-calvino-italic" },
          ],
          description:
            "We help kids manage muscle and joint pain by strengthening supporting muscles, improving posture, and increasing flexibility. This reduces discomfort, allowing them to enjoy activities and live a better quality of life without pain.",
        },
      ],
      provide: {
        title: [
          { text: "We ", class: "font-calvino" },
          { text: " help", class: "font-calvino-italic" },
          { text: "with ", class: "font-calvino" },
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
            title: "Autism",
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
          "We can help your child with everyday tasks like getting dressed and eating and encourage independence through fun, new activities.",
        image: [
          { src: "oc1.png", alt: "Program image 1" },
          { src: "oc2.png", alt: "Program image 2" },
          { src: "oc3.png", alt: "Program image 3" },
        ],
        link: "",
      },
      video: {
        title: [
          { text: "See how  ", class: "font-calvino" },
          { text: "occupational therapy", class: "font-calvino-italic" },
          { text: "will help your child?", class: "font-calvino" },
        ],
        youtubeId:
          "https://www.youtube.com/embed/Zf-ETdDwLRc?si=G2JTwD7LdNkIEyq8",
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
            "Occupational therapy helps kids with everyday tasks, like writing, buttoning, running and jumping, through fun activities. It's all about building strength and coordination so they can be more independent at home, during playtime and at school.",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Enhancement of ", class: "font-calvino" },
            { text: " Emotional Regulation", class: "font-calvino-italic" },
          ],
          description:
            "We help kids link up their physical abilities, senses and feelings. Our therapists work with them on handling emotions like frustration, anxiety and anger which boosts their self-awareness and control. Tackling sensory issues also makes them emotionally stronger and better at social interactions.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Improvement of Sensory  ", class: "font-calvino" },
            { text: " Processing Abilities", class: "font-calvino-italic" },
          ],
          description:
            "Sensory processing is how our nervous system handles sensory info. If kids struggle with too much/little reaction to sights, sounds or textures, our therapists create personalized plans to help them adapt and thrive.",
        },
      ],
      provide: {
        title: [
          { text: "We ", class: "font-calvino" },
          { text: " help", class: "font-calvino-italic" },
          { text: "with ", class: "font-calvino" },
        ],
        slides: [
          {
            title: "Sensory Processing Disorders",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "100",
          },
          {
            title: "Learning Problems",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "200",
          },
          {
            title: "Juvenile Rheumatoid Arthiritis",
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
            title: "Cancer",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "500",
          },
          {
            title: "Post-surgical Conditions",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "600",
          },
          {
            title: "Mental Health or Behavioral Problems",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "700",
          },
          {
            title: "Developmental Delays",
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
          "We can help children communicate better by boosting their speech, language and social skills so they can speak confidently in public.",
        image: [
          { src: "Speech2.png", alt: "Program image 1" },
          { src: "Speech1.png", alt: "Program image 2" },
          { src: "ABA - speech.png", alt: "Program image 3" },
        ],
        link: "",
      },
      video: {
        title: [
          { text: "See how  ", class: "font-calvino" },
          { text: "speech therapy", class: "font-calvino-italic" },
          { text: "will help your child?", class: "font-calvino" },
        ],
        youtubeId:
          "https://www.youtube.com/embed/MydwaGkA5L0?si=HdQAM_trws1IUB1-",
      },
      breif: {
        description:
          "Speech therapy is a specialized field focused on assessing, diagnosing and treating communication and swallowing disorders across the lifespan. For individuals facing challenges with speech, language and social communication, speech therapy offers invaluable assistance in fostering clearer and more effective communication. This support extends to improving articulation, fluency, voice, resonance and overall language comprehension and expression. Furthermore, speech therapy addresses social communication skills, empowering individuals to engage more confidently and appropriately in various social settings ultimately enabling them to speak with assurance in public places.",
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
            { text: "Enhance", class: "font-calvino" },
            { text: "Communication", class: "font-calvino-italic" },
          ],
          description:
            "Speech therapy helps us communicate better. It improves our spoken words, vocabulary, grammar and ability to share thoughts making self-expression easier and more accurate.",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Overall ", class: "font-calvino" },
            { text: " Development", class: "font-calvino-italic" },
          ],
          description:
            "Speech therapy boosts communication which is vital for personal and social growth. It enhances academic, social and emotional well-being. By fostering better communication, therapy supports overall development and life engagement.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Intelligibility", class: "font-calvino-italic" },
          ],
          description:
            "This makes speech clearer, improving word formation, pronunciation and pace. This reduces frustration, making conversations much easier and more successful for everyone.",
        },
      ],
      provide: {
        title: [
          { text: "We ", class: "font-calvino" },
          { text: " help", class: "font-calvino-italic" },
          { text: "with ", class: "font-calvino" },
        ],
        slides: [
          {
            title: "Genetic, Chromosomal or Metabolic Disorders",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "100",
          },
          {
            title: "Speech Sound Disorders",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "200",
          },
          {
            title: "Childhood Apraxia of Speech",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "300",
          },
          {
            title: "Pragmatic Language Disorder",
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
            title: "Receptive/Expressive Language Impairment",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "600",
          },
          {
            title: "Autism Spectrum Disorder",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "700",
          },
          {
            title: "Developmental Delay",
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
          "We can help kids build positive behavior, social skills and learning routines through meaningful encouragement while keeping things systematic and evidence-based.",
        image: [
          { src: "aba2.png", alt: "Program image 1" },
          { src: "aba3.png", alt: "Program image 2" },
          { src: "ABA - speech.png", alt: "Program image 3" },
        ],
        link: "",
      },
      video: {
        title: [
          { text: "See how  ", class: "font-calvino" },
          { text: "ABA", class: "font-calvino-italic" },
          { text: "will help your child?", class: "font-calvino" },
        ],
        youtubeId:
          "https://www.youtube.com/embed/9PkNv7jQZ38?si=y1IZ9eDRTeRWDqz4",
      },
      breif: {
        description:
          "This resource outlines a comprehensive and systematically applied evidence-based strategy designed to foster the holistic development of children. By employing meaningful reinforcement techniques, this approach effectively cultivates positive behavior, essential social skills and consistent learning routines. The core principle revolves around creating a supportive and encouraging environment that motivates children to engage in desirable actions and internalize constructive patterns.",
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
            { text: "Enhancement of Fine", class: "font-calvino" },
            { text: " and Gross Motor Skills", class: "font-calvino-italic" },
          ],
          description:
            "This method boosts fine and gross motor skills with fun activities and encouraging words. It helps kids develop precise movements like writing and use bigger muscles. We encourage practice and mastery to build a strong physical foundation!",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Fostering", class: "font-calvino" },
            { text: "Emotional Regulation", class: "font-calvino-italic" },
          ],
          description:
            "Our method helps kids get a handle on their feelings – understanding them, showing them in healthy ways and managing them positively. This builds strength, empathy and awesome relationships. Mastering emotions is super important for happy social lives and good mental health.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Optimaization of", class: "font-calvino" },
            { text: "Sensory Processing", class: "font-calvino-italic" },
          ],
          description:
            "We help kids with sensory processing differences. Some are extra sensitive or not sensitive enough to sights, sounds or textures. Our approach helps them comfortably explore, adjust and learn, feeling more connected.",
        },
      ],
      provide: {
        title: [
          { text: "BCBA", class: "font-calvino" },
          { text: "will", class: "font-calvino-italic" },
          { text: "assess", class: "font-calvino" },
        ],
        slides: [
          {
            title: "Communication & Social Skills",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "100",
          },
          {
            title: "Motor Skilss",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "200",
          },
          {
            title: "Self-care",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "300",
          },
          {
            title: "Play & Leisure",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "400",
          },
          {
            title: "Learning & Academic Skills",
            image: "yoga-therapy.png",
            bgColor: "primary-bg-2",
            animationDelay: "500",
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
          "This is a fun and positive way to express emotions, communicate and interact with others through movement, melody and rhythm.",
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
          { text: "music therapy", class: "font-calvino-italic" },
          { text: "will help your child?", class: "font-calvino" },
        ],
        youtubeId:
          "https://www.youtube.com/embed/a5Zip57_u8Y?si=P_65qp581W6DH56s",
      },
      breif: {
        description:
          "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
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
            { text: "Cognitive", class: "font-calvino" },
            { text: "Development", class: "font-calvino-italic" },
          ],
          description:
            "Learning about melody, rhythm and harmony can really help with memory and problem-solving skills. Plus, getting creative with music is great for boosting flexible thinking, organization and the ability to follow instructions.",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Social Skills", class: "font-calvino" },
            { text: "& Communication", class: "font-calvino-italic" },
          ],
          description:
            "It helps you connect and express yourself, boosting social skills, teamwork and listening. You'll feel a sense of belonging and fight loneliness. It's truly fantastic for building connections and expressing who you are.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Sensory", class: "font-calvino" },
            { text: "Integration", class: "font-calvino-italic" },
          ],
          description:
            "The sounds, the feel of playing instruments and movement in dance help us integrate sensory info. This boosts self-regulation and body awareness, while predictable rhythms are calming and organizing.",
        },
      ],
      provide:false,
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
          "We’ve seen how yoga therapy can really help kids. It’s all about boosting their balance, focus and body awareness with some fun, slow movements and mindful breathing.",
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
          { text: "yoga therapy", class: "font-calvino-italic" },
          { text: "will help your child?", class: "font-calvino" },
        ],
        youtubeId:
          "https://www.youtube.com/embed/Jg-CfSFXJiw?si=WEQULtMv7HOZhtgb",
      },
      breif: {
        description:
          "Yoga therapy offers a holistic approach to child development by thoughtfully integrating gentle, deliberate movements with mindful breathing techniques. This unique combination empowers children to cultivate balance, enhance their concentration skills and foster a deeper understanding of their own bodies, all within a fun and engaging framework. Through imaginative poses and playful activities, yoga therapy makes the journey of self-discovery an enjoyable experience for young learners.",
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
            { text: "Emotional", class: "font-calvino" },
            { text: "Wellbeing", class: "font-calvino-italic" },
          ],
          description:
            "Kids find yoga therapy a fantastic tool for managing their emotions. It teaches them relaxation for stress, mindful breathing for self-control and physical mastery for confidence. This supportive environment also encourages emotional expression.",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Mental Focus", class: "font-calvino" },
            { text: "& Cognitive Growth", class: "font-calvino-italic" },
          ],
          description:
            "Yoga therapy can significantly boost your brainpower. Through unique breathing and holding poses, it sharpens focus and attention enhancing memory and thinking skills. It also encourages creative problem-solving and greater mindfulness for better concentration.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Physical", class: "font-calvino" },
            { text: "Development", class: "font-calvino-italic" },
          ],
          description:
            "It builds strength, flexibility and coordination. Kids gain body awareness, better posture and practical strength, preventing injuries. It sharpens motor skills, fosters understanding of bodily sensations and aligns their spine for improved everyday movement.",
        },
      ],
      provide:false,
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
          "We'll have fun with rhythm exercises to boost your child’s timing, focus and coordination, which will help us with concentration and motor planning.",
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
          { text: "interactive metronome", class: "font-calvino-italic" },
          { text: "will help your child?", class: "font-calvino" },
        ],
        youtubeId:
          "https://www.youtube.com/embed/Zf-ETdDwLRc?si=G2JTwD7LdNkIEyq8",
      },
      breif: {
        description:
          "This innovative brain-targeted software utilizes engaging, rhythm-based exercises to significantly enhance crucial cognitive functions including timing, attention and coordination. By participating in these interactive activities, users can experience notable improvements in their ability to concentrate and effectively plan their motor movements.",
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
            { text: "Improved Focus, Attention Span", class: "font-calvino" },
            { text: "and Working Memory", class: "font-calvino-italic" },
          ],
          description:
            "This program helps boost your focus and memory. Use it regularly and you'll find yourself able to concentrate better, stay on task longer and remember things more easily, which all adds up to better learning and problem-solving.",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Enhance Motor Planning", class: "font-calvino" },
            { text: "& Coordination", class: "font-calvino-italic" },
          ],
          description:
            "Your brain learns to plan and perform movements better. This leads to smoother, more coordinated actions in daily life, sports and complex tasks, making them more efficient and accurate.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Strengthened Neural Timing for", class: "font-calvino" },
            { text: "Better Cognitive Processing", class: "font-calvino-italic" },
          ],
          description:
            "These rhythm exercises are like brain training! They sharpen your internal timing making you think faster and process information more efficiently. You'll react quicker and understand things happening over time better.",
        },
      ],
      provide:false,
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
    "tutoring": {
      hero: {
        title: [{ text: "Tutoring ", class: "font-calvino" }],
        description:
          "We’ll help your child learn at their own pace with personalized support that matches their unique style, building confidence and mastering essential skills",
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
          { text: "tutoring", class: "font-calvino-italic" },
          { text: "will help your child?", class: "font-calvino" },
        ],
        youtubeId:
          "https://www.youtube.com/embed/Zf-ETdDwLRc?si=G2JTwD7LdNkIEyq8",
      },
      breif: {
        description:
          "Our tutoring services offer personalized learning assistance meticulously tailored to your child's unique learning style. This individualized approach fosters a supportive environment where students can confidently reinforce and achieve mastery of critical academic skills at a pace that suits their individual needs. We believe in nurturing not only academic success but also a strong sense of self-efficacy in our students.",
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
            { text: "Builds Confidence Through", class: "font-calvino" },
            { text: "Dedicated One-on-One Support", class: "font-calvino-italic" },
          ],
          description:
            "Our amazing tutors are all about making learning enjoyable and stress-free. Students get their undivided attention so they can freely ask questions, explore new concepts and conquer challenges, building their confidence along the way.",
        },
        {
          img: "testmonial-2.png",
          title: [
            { text: "Reinforces Foundational Academic", class: "font-calvino" },
            { text: "Skills for Long-Term Success", class: "font-calvino-italic" },
          ],
          description:
            "We do more than just homework help. Our programs strengthen core academic knowledge, creating a solid base so students can understand advanced concepts and continue to succeed in all their subjects.",
        },
        {
          img: "testmonial-1.png",
          title: [
            { text: "Encourages Independent Learning", class: "font-calvino" },
            { text: "and Effective Problem-Solving Abilities", class: "font-calvino-italic" },
          ],
          description:
            "Our tutors empower students to become independent, resourceful learners. They'll gain the skills to tackle academic challenges and take charge of their education with confidence.",
        },
      ],
      provide:false,
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

    
  const { type } = useParams();
  // console.log(type);
  const program = programsData[type];
  // console.log(program);
  if (!program) return <div>Program not found</div>;
  return (
    <div className="mt-[102px] md:mt-[128px]">
      <ProgramInner data={program} />
    </div>
  );
}

export default DynamicProgramPage;
