import React from "react";
import FounderMessage from "../sections/about-us/FounderMessage";
import OurJourney from "../sections/about-us/OurJourney";
import Vision from "../components/Vision";
import Mission from "../components/Mission";

function AboutUs() {
  return (
    <div className="mt-[102px] md:mt-[128px]">
      <FounderMessage />
      <OurJourney />
      <Vision />
      <Mission />
    </div>
  );
}

export default AboutUs;
