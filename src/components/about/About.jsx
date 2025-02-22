import React from "react";
import { FaDochub } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <div className="max-w-screen-xl py-12 sm:py-16 mx-auto px-4 sm:px-2">
        <div className="grid gap-4 sm:gap-2 grid-cols-12 items-center">
          <div className="left sm:col-span-6 col-span-12">
            <div className="relative">
             <div>
             <img
                src="https://next.aglietech.wowtheme7.com/assets/img/about/14.png"
                alt="bg"
                className="object-contain h-full aspect-square w-full"
              />
             </div>
              <img
                src="https://next.aglietech.wowtheme7.com/assets/img/about/13.png"
                className="absolute top-0 left-0 md:w-full md:h-full about-image object-contain md:left-0"
                alt="about image"
              />
            </div>
          </div>
          <div className="right sm:col-span-6 col-span-12 mt-8 sm:mt-0">
            <p className="uppercase text-maincolor tracking-wider text-lg sm:text-xl">
              about us
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold my-5">
              Transforming Business <br />
              Through <span className="text-maincolor">Software</span>
            </h1>
            <p className="text-gray-800 text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Loreaim Ipsum has been the industry's standard dummy
            </p>
            <div className="skills mt-6 sm:mt-10">
              <div className="skill gap-4 flex items-center w-full mb-4 shadow-lg px-4 py-4 rounded-md">
                <div className="logo bg-blue-200 rounded-md px-4 sm:px-5 py-4 sm:py-5">
                  <FaDochub />
                </div>
                <div className="w-full">
                  <h3 className="text-lg sm:text-xl font-semibold p-2">
                    Web Development
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 shadow-inner">
                    <div
                      className="bg-maincolor h-3 sm:h-4 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="skill gap-4 flex items-center w-full mb-4 shadow-lg px-4 py-4 rounded-md">
                <div className="logo bg-blue-200 rounded-md px-4 sm:px-5 py-4 sm:py-5">
                  <FaDochub />
                </div>
                <div className="w-full">
                  <h3 className="text-lg sm:text-xl font-semibold p-2">
                    Software Development
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 shadow-inner">
                    <div
                      className="bg-maincolor h-3 sm:h-4 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
