import React from "react";
import { FaArrowRight, FaSteamSquare, FaCode, FaMobileAlt, FaDatabase, FaCloud } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Research ipsum dolor sit consec tetur sed diam in the aliquam tempor",
    icon: <FaCode className="text-5xl text-blue-500" />
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Research ipsum dolor sit consec tetur sed diam in the aliquam tempor",
    icon: <FaMobileAlt className="text-5xl text-green-500" />
  },
  {
    id: 3,
    title: "Database Management",
    description: "Research ipsum dolor sit consec tetur sed diam in the aliquam tempor",
    icon: <FaDatabase className="text-5xl text-red-500" />
  },
  {
    id: 4,
    title: "Cloud Services",
    description: "Research ipsum dolor sit consec tetur sed diam in the aliquam tempor",
    icon: <FaCloud className="text-5xl text-purple-500" />
  },
  
];

export default function Offer() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-2 py-16">
        <div className="center text-center mb-5">
          <p className="uppercase text-maincolor tracking-wider text-lg sm:text-xl">
            about us
          </p>
          <h1 className="text-3xl sm:text-4xl  my-5">
            It <span className="text-maincolor">Service</span> Refers To the
            <br />Provision Of 
            Support
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-6">
          {services.map(service => (
            <div key={service.id} className="shadow-lg p-4 rounded-md hover:shadow-xl transition-shadow duration-300">
              <div className="logo mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-2xl my-4">{service.title}</h3>
              <p>{service.description}</p>
              <button className="flex items-center gap-4 mt-4 hover:text-maincolor transition-colors duration-300">
                <span>Read More</span> <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
