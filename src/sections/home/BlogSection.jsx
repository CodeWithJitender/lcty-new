import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Heading from "../../components/Heading";

function BlogSection() {
  const blogs = [
    {
      title: "The Power of Early Communication: Starting Sign Language With Your Child.",
      subtitle: "using simple words",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      link: "/blog/blog1",
      image: "vol-form.jpg", // Replace with your image
      description:
        `Do you remember one of those evenings where you're trying to cook dinner after a hectic day and your 10-month-old starts crying in their chair.`,
    },
  ];
  const data = {
    title: [
      { text: "A ", class: "font-calvino" },
      { text: "little more about", class: "font-calvino-italic" },
      { text: "our thoughts!", class: "font-calvino" },
    ],
    textAlign: "text-center md:text-start",
    spacing: "p-4",
    fontSize: "h3",
  };
  return (
    <section className="relative" style={{ background: "linear-gradient(360deg, rgba(200, 182, 255, 0.4) 0%, rgba(255, 150, 255, 0) 100%)" }}>
      <div className="container-fixed">
        <div className="">
          <div className="flex justify-between" >
            <Heading data={data} />
             <div className="flex items-center justify-center ">
                <Link to="/blog" className="flex items-center gap-2 ">
                  <div className="w-14 h-14 secondary-bg-1 flex items-center justify-center rounded-full text-white body-t hover:bg-[#fab4fa] transition-all">
                    <i class="fal fa-arrow-up rotate-45 "></i>
                  </div>
                </Link>
              </div>
          </div>

          <div className="" data-aos="fade-up" data-aos-delay="300">
            <div className="">
              <div className="grid grid-cols-2 gap-4">
                {blogs.map((blog, index) => (
                  <Link
                  to={blog.link}
                    key={index}
                    className="grid lg:grid-cols-2 primary-bg-2 text-white overflow-hidden shadow-lg mt-4 p-4 gap-4"
                  >
                    <div className="">
                      <img
                        src={blog.image}
                        alt="Blog"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className=" flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="h4  mb-2 leading-none">
                          <span className="font-calvino leading-none">{blog.title} </span>
                          <span className="font-calvino-italic leading-none">
                            {blog.subtitle}
                          </span>
                        </h2>
                        <div className=" font-archivo border-y border-white mt-2 pt-2 pb-2 mb-4 flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base gap-1">
                          <span>{blog.author}</span>
                          <span>{blog.date}</span>
                        </div>
                        {/* <p className="font-archivo btn-t mb-4 text-white">
                          {blog.description}
                        </p> */}
                      </div>
                      <Link
                        to={blog.link}
                        className=" text-white font-calvino-italic flex items-center gap-1 mt-auto "
                      >
                        Read more <i class="fal fa-arrow-right -rotate-45"></i>
                      </Link>
                    </div>
                  </Link>
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
