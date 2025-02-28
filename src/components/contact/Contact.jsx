import React from "react";
import Button from "../button/Button";

export default function Contact() {
  return (
    <div className="container py-10 mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <p className="uppercase text-maincolor text-lg tracking-wider">
            YOUR ANSWER
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl my-5">
            Have Any <span className="text-maincolor">Questions</span> <br />{" "}
            Please?
          </h1>
          <div className="input-forms">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Contact"
                className="border p-2 rounded"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded w-full my-4"
            />
            <textarea
              placeholder="Message"
              className="border mb-3 p-2 rounded w-full h-32"
            ></textarea>
          <Button text="Contact Us"/>
          </div>
        </div>
        <div>
        <div className="relative">
             <div>
             <img
                src="https://next.aglietech.wowtheme7.com/assets/img/about/14.png"
                alt="bg"
                className="object-contain h-full aspect-square w-full"
              />
             </div>
              <img
                src="https://next.aglietech.wowtheme7.com/assets/img/about/19.png"
                className="absolute top-0 left-0 md:w-full md:h-full about-image object-contain md:left-0"
                alt="about image"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
