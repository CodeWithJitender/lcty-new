import React from 'react'
import Heading from '../../components/Heading'

function ResultSection() {
   const data = {
    title: [
      { text: "Lorem ipsum", class: "font-calvino" },
      { text: "dolor sit amet, consectetur", class: "font-calvino-italic" },
      { text: "adipiscing elit. In accumsan eros non fringilla faucibus.", class: "font-calvino" },
    ],
    textAlign: "text-left",
    spacing: "mb-5 leading-4",
    fontSize: "h2 ",
    fontColor: "secondary-text-1",
    };
  return (
     <section className="bg-white w-full " >
      <div className="container-fixed ">
        {/* <div>

        </div> */}
        <img src="Frame.png" className='h-[600px] w-full' alt="" />
      </div>
    </section>
  )
}

export default ResultSection
