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
     <section className=" w-full " >
      <div className="max-w-[1600px] mx-auto px-4 pt-16 md:pt-20">
            <img src="result.jpg" className="w-full" alt="" />

        {/* <div className="md:flex gap-5  pt-[50px]">
          Chart + Stat Box
          <div className="relative md:max-w-4xl md:order-2 mb-5 md:mb-auto">

            Stat Box
            <div className="md:absolute md:right-[-5%] md:top-[-20%] bg-[#8A63FF80] backdrop-blur-lg text-white p-4 md:rounded-2xl md:w-60 shadow-lg z-10 md:text-center w-full mt-4 md:mt-0">
              <h3 className="h4 font-calvino mb-2">Lorem ipsum dolor</h3>
              <p className="font-calvino-italic body-t mb-2" >Lorem ipsum</p>
              <div className="h4 font-archivo font-bold mt-3 mb-3" >
                6546
              </div>
              <p className="font-archivo mb-3 text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className=" font-archivo  text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            Chart Placeholder
            <div className="bg-gradient-to-tr from-purple-300 to-pink-400 rounded-lg overflow-hidden">
            <div className="relative h-64 sm:h-72 md:h-80 flex items-end justify-between px-6 pb-6 text-white text-sm font-light">
              <div className="absolute left-4 top-4 rotate-[-90deg] origin-left">
                Lorem ipsum
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex justify-between text-xs">
                <span>2019</span>
                <span className="bg-white text-pink-500 px-3 py-1 rounded-full font-bold">2021</span>
                <span>2023</span>
                <span>2025</span>
                <span>2027</span>
              </div>

              <div className="absolute left-[25%] bottom-[30%] flex flex-col items-center text-white">
                <div className="w-4 h-4 border-2 border-white rounded-full bg-transparent"></div>
                <span className="mt-1">Lorem ipsum</span>
              </div>

              <i className="fas fa-arrow-right absolute right-4 bottom-4 text-white text-sm"></i>
            </div>
          </div>
            <div className=""></div>
          </div>

          Top Text 
          <div className=" md:text-left md:max-w-[1000px] md:order-1">
            <div className="" data-aos="fade-up">
            <Heading data={data} />
            </div>

            <p className="body-t body-t-color mt-4 " data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p className="body-t body-t-color mt-2" data-aos="fade-up" data-aos-delay="200">
              Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac.
              Duis eu nisi non orci fermentum commodo.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ResultSection
