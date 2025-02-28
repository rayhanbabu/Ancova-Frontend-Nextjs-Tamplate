import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const blogs = [
    {
      title: "The Future of AI",
      description: "Explore how AI is transforming industries and everyday life.",
      link: "#",
    },
    {
      title: "Web Development Trends",
      description: "Discover the latest trends in web development and design.",
      link: "#",
    },
    {
      title: "Cybersecurity in 2024",
      description: "Learn about the newest challenges and solutions in cybersecurity.",
      link: "#",
    },
  ];

  return (
    <section className="w-full business mx-auto p-4">
      <div className="max-w-screen-xl py-32 mx-auto px-2">
        <div className="text-center">
          <p className="uppercase text-maincolor text-lg tracking-wider">YOUR ANSWER</p>
          <h1 className="text-5xl font-semibold sm:text-4xl my-5">
            Transforming <span className="text-maincolor">Businesses</span> <br /> Through Innovation
          </h1>
        </div>
        
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://next.aglietech.wowtheme7.com/assets/img/blog/5.png" 
                  alt="Blog" 
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 mt-4">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a href={blog.link} className="text-maincolor flex items-center font-semibold hover:underline">
                Read More <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
