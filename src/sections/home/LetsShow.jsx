import React from 'react'
import ButtonPrimary from "../../components/ButtonPrimary";
import Heading from '../../components/Heading';
function LetsShow() {
  const data = {
    title: [
      { text: "A", class: "font-calvino" },
      { text: " Gentle Start", class: "font-calvino-italic" },
      { text: "Awaits", class: "font-calvino" },
    ],
    textAlign: "text-center",
    spacing: "mb-5",
    fontSize: "h1",
    fontColor: "secondary-text-1",

  };
  return (
     <div className="h-[100vh] flex items-center justify-center w-full " >
      <div className="container-fixed flex items-center  justify-center flex-col text-center lg:text-left lg:flex-row gap-4 md:gap-10">
        <div className="" data-aos="fade-up">
        <Heading data={data}  />
          
        </div>
        <div className="relative ">
          <ButtonPrimary text="Register Now"/>
        </div>
      </div>
    </div>
  )
}

export default LetsShow
