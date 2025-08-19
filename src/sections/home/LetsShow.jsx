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
     <div className="flex items-center justify-center w-full pb-[100px]" >
      <div className=" flex items-center  justify-center flex-col text-center lg:text-left lg:flex-row gap-4 md:gap-10">
        <div className="" data-aos="fade-up">
        <Heading data={data}  />
          
        </div>
        <div className="relative ">
          <ButtonPrimary text="Register Now" link={"https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps"}/>
        </div>
      </div>
    </div>
  )
}

export default LetsShow
