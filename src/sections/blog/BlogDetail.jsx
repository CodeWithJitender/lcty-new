import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import posts from "./data";
import BlogCard from "../../components/BlogCard";
function BlogDetail({ dataId }) {
  // Function to get blog by ID
  const getBlogById = (item) => {
    return posts.filter((blog) => blog.blogId === item);
  };

  // Usage
  const blog = getBlogById(dataId);
  const {
    title,
    description,
    tags,
    image,
    content,
    related,
    date,
    delay,
    blogId,
  } = blog[0];
  // console.log("BlogDetail data", data[0].title);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <p className="body-t text-gray-500 text-center ">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full mr-2 p-2">
          {tags[0]}
        </span>
        {date}
      </p>
      <h1 className="h1 mt-2 mb-4 text-center secondary-text-1">
        {title.map((part, i) => (
          <span key={i} className={part.class}>
            {" "}
            {part.text}{" "}
          </span>
        ))}
        {/* {data.title} */}
      </h1>
      <div className="space-y-10">
        {description.map((paragraph, i) => (
          <p className="text-center mb-8" key={i}>
            {paragraph}
          </p>
        ))}
      </div>

      <img src={`/${image}`} className="w-full rounded-lg mb-6" />

      {content.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="h3 font-calvino mb-2 body-t-color">
            {section.heading}
          </h2>
          {section.paragraphs.map((text, i) => (
            <p key={i} className="body-t-color mb-3">
              {text}
            </p>
          ))}
          {section.list && section.list.map((item, i) => (
            <div className="list mt-7" key={i}>
              <h3 className="h4 font-calvino mb-2 secondary-text-1">
                {item.title}
              </h3>
              <p className="body-t-color">{item.text}</p>
            </div>
          ))}
        </div>
      ))}

      <hr className="my-10" />

      <h3 className="h3 mb-5 secondary-text-1">
        <span className="font-calvino">Related </span>
        <span className="font-calvino-italic">Article</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((item, idx) => {
          // console.log("Related blog", item);
          const blog = posts.filter((blog) => blog.blogId === item)[0] || {};
          //   console.log("Related blog", blog[0]);
          return <BlogCard post={posts[0]} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default BlogDetail;
