import React from "react";
import Heading from "../../components/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import $ from 'jquery'
gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    city: "LCTY",
    branch: "Boca Raton, FL",
    address:
      "1499 W Palmetto Park Rd # 212, Boca Raton, FL 33432, United States",
    tel: "+15614944499",
    email: "info@littlechampstherapy.com",
    link: "https://maps.app.goo.gl/EP55PPr6s1iVs37c6", // Replace with actual map or contact link
  },
  {
    city: "LCTY",
    branch: "West Palm Beach, FL",
    address:
      "2711 Exchange Ct Suite B, West Palm Beach, FL 33409, United States",
    tel: "+15614944499",
    email: "info@littlechampstherapy.com",
    link: "https://maps.app.goo.gl/mmRrTwqBkZtRarLi8",
  },
  {
    city: "LCTY",
    branch: "Delray Beach, FL",
    address:
      "14565 Sims Rd, Delray Beach, FL 33484, United States",
    tel: "+15614944499",
    email: "info@littlechampstherapy.com",
    link: "https://maps.app.goo.gl/242u5aNv4WW9cLxY7",
  },
  {
    city: "LCTY",
    branch: "Coral Springs, FL",
    address:
      "8110 Royal Palm Blvd #110, Coral Springs, FL 33065, United States",
    tel: "+15614944499",
    email: "info@littlechampstherapy.com",
    link: "https://maps.app.goo.gl/J4w3QLsywnkQADiC8",
  },
];

const ClinicLocation = () => {
// useGSAP(() => {
//     $(function () {
//       let cards = gsap.utils.toArray(".client-wrapper");

//       let stickDistance = 0;

//       let firstCardST = ScrollTrigger.create({
//         trigger: cards[0],
//         start: "center center",
//       });

//       let lastCardST = ScrollTrigger.create({
//         trigger: cards[cards.length - 1],
//         start: "bottom bottom",
//       });

//       cards.forEach((card, index) => {
//         var scale = 1 - (cards.length - index) * 0.025;
//         let scaleDown = gsap.to(card, {
//           scale: scale,
//           "transform-origin":
//             '"50% ' + (lastCardST.start + stickDistance) + '"',
//         });

//         ScrollTrigger.create({
//           trigger: card,
//           start: "center center",
//           end: () => lastCardST.start + stickDistance,
//           pin: true,
//           pinSpacing: false,
//           ease: "none",
//           animation: scaleDown,
//           toggleActions: "restart none none reverse",
//         });
//       });
//     });
//   });  

  const data = {
    title: [
      { text: "Clinic ", class: "font-calvino" },
      { text: "location", class: "font-calvino-italic" },
    ],
    textAlign: "text-center  md:text-start",
    spacing: "mb-6",
    fontSize: "h1",
  };
  return (
    <section className="md:px-6 py-12 md:py-16 bg-white">
      <div className="container-fixed">
        <div className=" flex flex-col lg:flex-row gap-10">
          {/* Left - Clinic Info */}
          <div className="flex-1">
            <div className="" data-aos="fade-up">
              <Heading data={data} />
            </div>
            <div className="client-wrapper">
              <div className="space-y-6 ">
                {locations.map((loc, index) => (
                  <div
                    key={index}
                    className="client-box primary-bg-2 btn-group text-white p-4 relative"
                    // data-aos="fade-right"
                    // data-aos-delay="200"
                  >
                    <div className="flex flex-col md:flex-row justify-stretch md:items-end">
                      <div className="">
                        <div className="h4 mb-1">
                          <span className="font-calvino">{loc.city}</span>{" "}
                          <span className="font-calvino-italic">{`- ${loc.branch}`}</span>
                        </div>
                        <p className="font-archivo text-lg mb-1 text-white">
                          <span className="font-bold">Address:</span>{" "}
                          {loc.address}
                        </p>
                        <p className="font-archivo text-lg mb-1 text-white">
                          <span className="font-bold">Tel:</span> {loc.tel}
                        </p>
                        <p className="font-archivo text-lg  text-white">
                          <span className="font-bold">Email:</span> {loc.email}
                        </p>
                      </div>
                      <div className="mt-3 text-end absolute right-[16px] bottom-[16px]">
                        <a
                          href={loc.link}
                          className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] inline-block leading-[30px] md:leading-[50px] text-center  transition"
                        >
                          <i class="fal fa-arrow-up rotate-45  rounded-full nav-t  p-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="flex-1 rounded-xl">
            <iframe
              title="Clinic Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114407.23832674982!2d-80.26740810273436!3d26.351544900000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91dfa07ef8d31%3A0x7c19f3ec98168cc8!2sLittle%20Champs%20Therapy%20%26%20Yoga!5e0!3m2!1sen!2sin!4v1748496880469!5m2!1sen!2sin" // Replace with your actual map link
              className="w-full h-full min-h-[300px] rounded-xl border-none"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocation;
