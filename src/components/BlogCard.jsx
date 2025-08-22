import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  console.log(post)
  return (
    <div
      className="bg-white shadow-sm rounded-lg overflow-hidden border"
      data-aos="fade-up"
      data-aos-duration="1000"
      // data-aos-delay={post.delay}
    >
      <Link to={`/blog/${post.blogId}`}>
        <img
          src={`/${post.image}`}
          alt={post.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <p className="text-sm body-t-color mb-2 font-archivo">
            {post.author} — {post.date}
          </p>
          <h2 className="h4 font-semibold secondary-text-1 mb-3 leading-4">
            {post.title.map((part, i) => (
              <span key={i} className={part.class}>
                {" "}
                {part.text}{" "}
              </span>
            ))}
          </h2>
          <p className="text-sm body-t-color mb-4 font-archivo">
            {post.description[0].slice(0, 100)}...
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className=" text-sm p-2 border border-[#ff96ff] rounded-full text-[#ff96ff]  font-archivo "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
